<template>
	<section>

		<div class="formContent" style="margin: 20px 0;" >
			<el-button type="primary" size="medium" @click="addRedPack" icon="el-icon-search" >新建品台红包</el-button>
		
		</div>
		<div class="tableContent">
		  <el-table :data="tableData" border style="width: 90%">		    
		    <el-table-column  prop="id" label="ID" width="80" >	
			</el-table-column>
		    <el-table-column  prop="name" label="红包名称">
			</el-table-column>		
		    <el-table-column   prop="sendName" label="发送者">	    	
			</el-table-column>
		    <el-table-column   prop="totalAmount" label="总金额">	    	
			</el-table-column>
		    <el-table-column   prop="totalNum" label="发放人数">	    	
			</el-table-column>
		    <el-table-column   prop="receivedNum" label="已领人数">	    	
			</el-table-column>
		    <el-table-column  label="发放范围" width="180" >
		      <template slot-scope="scope">
			       <p>{{scopeTxt[scope.row.sendScope]}}</p>
		      </template>			    	
			</el-table-column>

		    <el-table-column  prop="statusRemark" label="状态" >			    	
			</el-table-column>

		    <el-table-column  label="操作">
		      <template slot-scope="scope">
		        <el-button @click="toEdit(scope.row)" type="text" size="small">查看详情</el-button>
		        <el-button v-if="scope.row.status==1" @click="handleRefund(scope.row.id)" type="text" size="small">退款</el-button>
		      </template>		    		
		    </el-table-column>
		  </el-table>			
		</div>
	   <div class="pagi">
		   <el-pagination
		      @size-change="handleSizeChange"
		      @current-change="handleCurrentChange"
		      :current-page="currentPage4"
		      :page-sizes="[10, 20, 30, 40]"
		      :page-size="10"
		      layout="total, sizes, prev, pager, next, jumper"
		      :total="total">
		    </el-pagination>	   	
	   </div>
		<el-dialog
		  :title="diaTitle"
		  :visible.sync="dialogVisible"
		  width="30%">
				<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="140px" class="demo-ruleForm">
				  
				  <el-form-item label="发送者" prop="sendName">
				    <el-input v-model="ruleForm.sendName"></el-input>
				  </el-form-item>				  
				  <el-form-item label="红包名称" prop="name">
				    <el-input v-model="ruleForm.name"></el-input>
				  </el-form-item>
				  <el-form-item label="祝福语" prop="wishing">
				    <el-input v-model="ruleForm.wishing"></el-input>
				  </el-form-item>				  
				  <el-form-item label="总金额" prop="totalAmount">
				    <el-input type="number" v-model="ruleForm.totalAmount"></el-input>
				  </el-form-item>					  
				  <el-form-item label="发放总人数" prop="totalNum">
				    <el-input type="number" v-model="ruleForm.totalNum"></el-input>
				  </el-form-item>	
				  <el-form-item label="备注" prop="remark">
				    <el-input  v-model="ruleForm.remark"></el-input>
				  </el-form-item>
				  <el-form-item label="活动性质" prop="subjectType">
				    <el-radio-group v-model="ruleForm.subjectType">
				      <el-radio label="0">名片活动</el-radio>
				      <el-radio label="1">传单活动</el-radio>
				    </el-radio-group>	
				  </el-form-item>				  
				  <el-form-item label="活动性质" prop="sendScope" >
				    <el-radio-group v-model="ruleForm.sendScope">
				      <el-radio label="0">针对单个名片或传单</el-radio>
				      <el-radio label="1">针对区域名片或传单</el-radio>
				      <el-radio label="2">全平台</el-radio>
				    </el-radio-group>				  		
				  </el-form-item>
				  <el-form-item label="名片或传单ID" prop="subjectId" v-show="ruleForm.sendScope==0"  >
				    <el-input type="number" v-model="ruleForm.subjectId"></el-input>
				  </el-form-item>					  
				  <el-form-item label="区域号" prop="areaCode" v-show="ruleForm.sendScope==1">
				    <el-input type="number" v-model="ruleForm.areaCode"></el-input>
				  </el-form-item>					  
				  <el-form-item label="活动规则（多选）"  required>
				     <el-checkbox label="分享可领" v-model="ruleForm.ruleShare" name="type"></el-checkbox>
 					 <el-checkbox label="购买可领" v-model="ruleForm.ruleTrade" name="type"></el-checkbox>
				  </el-form-item>
				</el-form>
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="dialogVisible = false">取 消</el-button>
		   <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
		  </span>
		</el-dialog>

	</section>
</template>

<script>

import {RedPacketList,RedPacketRefund,RedPacketSave} from '@/common/service/activityMana.js'
	
  export default {
    data() {
      var validate1 = (rule, value, callback) => {
        	 
        if(this.ruleForm.sendScope==0){
        	if(value === ''){
        		callback(new Error('请输入名片或传单ID'));
        	}else{
        		 callback();
        	}
        }else{
        	callback();
        }
      };    	
      var validate2 = (rule, value, callback) => {

        if(this.ruleForm.sendScope==1){
        	if(value === ''){
        		callback(new Error('请输入地区号'));
        	}else{
        		 callback();
        	}
        }else{
        	callback();
        }
      };      	
      return {
      	diaTitle:'编辑红包',
      	dialogVisible:false,
      	regdate:'',
      	total:0,
      	statusTxt:['发放失败','已发放','已领取','已退款'],
      	scopeTxt:['针对单个名片或传单','针对区域名片或传单','全平台'],
      	searchForm:{
      		page:0,
      		size:10,
      		sort:'',
      		status:'',
      	},
      	currentPage4:1,
        tableData: [],      	
        ruleForm: {
			userId:'',//integer(query)	用户id
			sendName:'', //*string(query)	红包发送者名称
			name:'',// *string(query)	活动名称
			wishing:'',// *string(query)	红包祝福语
			totalAmount:'',// *number(query)	红包总金额
			totalNum:'',// *integer(query)	红包发放总人数
			remark:'',// string(query)	备注
			sendScope:'2',// *string(query)	发放范围 0针对单个名片或传单 1针对区域名片或传单 2全平台	
			subjectType:'',// *integer(query)	活动类型 0名片活动 1传单活动
			subjectId:'',//integer(query)	sendScope为0时，名片或传单ID	
			areaCode:'',//string(query)	sendScope为1时，的地区号
			ruleShare:'',// *	boolean(query)	红包领取规则-是否分享可领取
			ruleTrade:'',// *boolean(query)		红包领取规则-是否交易可领取        	
        },
        rules: {
          name: [
            { required: true, message: '请输入红包名称', trigger: 'blur' },
          ],
          sendName: [
            { required: true, message: '请输入发送者名字', trigger: 'blur' },
          ],          
          wishing: [
            { required: true, message: '请输入红包祝福语', trigger: 'blur' },
          ],           
          totalAmount: [
            { required: true, message: '请输入红包总金额', trigger: 'blur' },
          ],  
          totalNum: [
            { required: true, message: '请输入发放总人数', trigger: 'blur' },
          ],           
          remark: [
            { required: true, message: '请输入备注', trigger: 'blur' },
          ],              
          sendScope: [
            { required: true, message: '请选择发放范围', trigger: 'blur' },
          ],             
          subjectType: [
            { required: true, message: '请选择活动类型', trigger: 'blur' },
          ], 
          subjectId: [
            { validator: validate1, trigger: 'blur' },
          ],           
          areaCode: [
            { validator: validate2, trigger: 'blur'  },
            
          ],             

        }
      }
    },
    /*列表全选*/
    watch: {

    },
    methods: {
	  addRedPack(){
	  	this.dialogVisible = true;
	  	this.diaTitle = '新增平台红包';
	  	this.ruleForm.id = '';
	  	this.resetForm('ruleForm');
	  },
	  toEdit(row){
	  	this.ruleForm = row;
	  	this.ruleForm.sendScope = String(this.ruleForm.sendScope);
	  	this.ruleForm.subjectType = String(this.ruleForm.subjectType);
	  	this.dialogVisible = true;
	  	this.diaTitle = '编辑红包';	  	
	  },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            
            this._RedPacketSave(this.ruleForm)
            
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },

      handleRefund(id){
      	
	        this.$confirm('此操作将会把红包余额退还给发起者, 是否继续?', '提示', {
	          confirmButtonText: '确定',
	          cancelButtonText: '取消',
	          type: 'warning'
	        }).then(() => {
				RedPacketRefund({id:id}).then((res)=>{
		     		this.$message({
		     			type:'success',
		     			message:'退款成功'
		     		})
		     		this._RedPacketList(this.searchForm);
				}).catch((res)=>{
					
		     		this.$message({
		     			type:'error',
		     			message:res.message
		     		})					
					
				})
				
			
	        }).catch(() => {
         
	        });      	
      	
      },
      _RedPacketSave(opt){
      	
      	RedPacketSave(opt).then((res)=>{
		     		this.$message({
		     			type:'success',
		     			message:'新增成功'
		     		})	      		
      		this.dialogVisible = false;
      	    this._RedPacketList(this.searchForm);	
      	}).catch((res)=>{
      		this.$message({
     			type:'error',
     			message:res.message
     		})     		
      	})
      	
      },
     _RedPacketList(opt){
     	RedPacketList(opt).then((res)=>{
				this.tableData = res.content;
				this.total = res.totalElements; 
     	}).catch((res)=>{
     		this.$message({
     			type:'error',
     			message:res.message
     		})
     	})
     },
     search(){
		this.searchForm.page = 0;
		this._RedPacketList(this.searchForm);     	
     },
	 handleClick(row){
	 	// this.$router.push({ path: '/userdetail' });
	 },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.searchForm.size = val
		this.searchForm.page = 0;
		this._RedPacketList(this.searchForm);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
		this.searchForm.page = val-1;
		this._RedPacketList(this.searchForm);        
      }	
    },
    mounted(){
    	this._RedPacketList(this.searchForm);
    }
  }
</script>

<style lang="scss" scoped="scoped">
	.tap{
		height: 60px;
		line-height: 60px;
		width: 100%;
	}
	.el-table__header{
		text-align: center;
	}
	.pagi{
		width: 90%;
		text-align: center;
		margin-top: 30px;
	}
</style>