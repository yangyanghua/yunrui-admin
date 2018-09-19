<template>
	<section>
		<!--<div class="tap">
			<el-button>导出用户</el-button>
		</div>-->
		<div class="formContent" style="margin-top: 20px;" >
	        <el-form :inline="true" :model="searchForm" class="demo-form-inline">   	          
	          <el-form-item label="状态"> 
	          
	            <el-select v-model="searchForm.status" placeholder="请选择">
	            	<el-option label="全部"  value=""></el-option>
			    	<el-option label="待审核"  value="0"></el-option>
			    	<el-option label="审核通过"  value="1"></el-option>
			    	<el-option label="拒绝"  value="2"></el-option>
			  </el-select>
			  
	          </el-form-item> 	          
	          

	          
	          
	          <el-form-item>
	            <el-button type="primary" size="medium" @click="search" icon="el-icon-search" >筛选</el-button>
<!--	            <el-button size="medium"  icon="el-icon-refresh">重置</el-button>-->
	          </el-form-item>
	        </el-form>			
		</div>
		<div class="tableContent">
		  <el-table :data="tableData" border style="width: 90%">
		    <el-table-column  prop="id" width="80" label="ID" >
		    </el-table-column>
		    <el-table-column  prop="realname" label="姓名">
			</el-table-column>			
		    <el-table-column  prop="areaName" label="区域">
			</el-table-column>
		    <el-table-column  prop="company" label="公司">
			</el-table-column>
		    <el-table-column  prop="telphone" label="联系电话">
			</el-table-column>
		    <el-table-column  prop="createTime" label="申请时间">
			</el-table-column>
		    <el-table-column  prop="statusRemark" label="审核备注">
			</el-table-column>			        
		    <el-table-column  label="操作">
		      <template slot-scope="scope">
		        <el-button @click="handleClick(scope.row.id)" type="text" size="small">审核</el-button>
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
		  title="提示"
		  :visible.sync="dialogVisible"
		  width="30%">
		  
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
			  <el-form-item label="通过审核" prop="status">
			    <el-radio-group v-model="ruleForm.status">
			      <el-radio label="1">是</el-radio>
			      <el-radio label="2">否</el-radio>
			    </el-radio-group>
			  </el-form-item>
			  <el-form-item label="备注" prop="statusRemark">
			    <el-input type="textarea" v-model="ruleForm.statusRemark"></el-input>
			  </el-form-item>

			</el-form>
		  
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="dialogVisible = false">取 消</el-button>
		    <el-button type="primary" v-loading="subloaidng"  @click="submitForm('ruleForm')">确认审核</el-button>
		  </span>
		</el-dialog>


	</section>
</template>

<script>



import {agentApplyList,agentApplyCheck} from '@/common/service/agent.js'
	
  export default {
    data() {
      return {
      	subloaidng:false,
      	dialogVisible:false,
      	regdate:'',
      	total:0,
        ruleForm: {
          id:'',	
          status:'1', 
          statusRemark : ''
        },
        rules: {
          status : [
            { required: true, message: '请选择是否 通过审核', trigger: 'blur' }
          ],        	
          statusRemark : [
            { required: true, message: '请填写备注', trigger: 'blur' }
          ]
        } ,     	
      	searchForm:{
      		page:0,
      		size:10,
      		status:'',      		
      	},
      	currentPage4:1,
        tableData: [],      	

      }
    },
    /*列表全选*/
    watch: {

    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            
            this.subloaidng = true;
            agentApplyCheck(this.ruleForm).then((res)=>{
	     		
	     		this.$message({
	     			type:'success',
	     			message:'审核成功'
	     		})              	
            	this.subloaidng = false;
            	this.dialogVisible = false;
            	this._agentApplyList(this.searchForm);
            	
            }).catch((res)=>{
	     		this.$message({
	     			type:'error',
	     			message:res.message
	     		})            	
            })
            
            
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },    	
     _agentApplyList(opt){
     	agentApplyList(opt).then((res)=>{
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
		this._agentApplyList(this.searchForm);     	
     },
	 handleClick(id){
	 	 
	 	 this.ruleForm.id = id;
	 	 this.dialogVisible = true;

	 },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.searchForm.size = val
		this.searchForm.page = 0;
		this._agentApplyList(this.searchForm);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
		this.searchForm.page = val-1;
		this._agentApplyList(this.searchForm);        
      }	
    },
    mounted(){
    	this._agentApplyList(this.searchForm);
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