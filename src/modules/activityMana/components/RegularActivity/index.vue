<template>
	<section>

		<div class="formContent" style="margin: 20px 0;" >

	            <el-button type="primary" size="medium" @click="dialogVisible=true" icon="el-icon-search" >活动修改</el-button>
		
		</div>
		<div class="tableContent">
		  <el-table :data="tableData" border style="width: 100%">		    

		    <el-table-column  prop="giveYuncoinRegister" label="注册送云贝">
			</el-table-column>
		    <el-table-column  prop="giveYuncoinCompleteFill" label="完整填完送云贝">		    	
			</el-table-column>			
		    <el-table-column prop="giveYuncoinFirstCardShare" label="添加完首个名片并分享">	    	
			</el-table-column>
		    <el-table-column prop="giveYuncoinFirstLeafletShare"   label="添加完首个传单并分享">		    	
			</el-table-column>
		    <el-table-column label="终身免费首个名片" >
		      <template slot-scope="scope">
		        <p v-if="scope.row.freeFirstCard">是</p>
		        <p v-else>否</p>
		      </template>			    	
			</el-table-column>	
			
		    <el-table-column label="终身免费首个传单" >
		      <template slot-scope="scope">
		        <p v-if="scope.row.freeFirstLeaflet">是</p>
		        <p v-else>否</p>
		      </template>			    	
			</el-table-column>							
		  </el-table>			
		</div>

	<el-dialog
	  title="平台活动编辑"
	  :visible.sync="dialogVisible"
	  width="40%">
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="180px" class="demo-ruleForm">
		  <el-form-item label="注册送云贝" prop="giveYuncoinRegister">
		    <el-input type="number" v-model="ruleForm.giveYuncoinRegister"></el-input>
		  </el-form-item>
		  <el-form-item label="完整填完送云贝" prop="giveYuncoinCompleteFill">
		    <el-input type="number" v-model="ruleForm.giveYuncoinCompleteFill"></el-input>
		  </el-form-item>		  
		  <el-form-item label="添加完首个名片并分享" prop="giveYuncoinFirstCardShare">
		    <el-input type="number" v-model="ruleForm.giveYuncoinFirstCardShare"></el-input>
		  </el-form-item>			  
		  <el-form-item label="添加完首个传单并分享" prop="giveYuncoinFirstLeafletShare">
		    <el-input type="number" v-model="ruleForm.giveYuncoinFirstLeafletShare"></el-input>
		  </el-form-item>	
		  <el-form-item label="">		  	
		    <el-checkbox v-model="ruleForm.freeFirstCard">终身免费首个名片</el-checkbox>
		    <el-checkbox v-model="ruleForm.freeFirstLeaflet">终身免费首个传单</el-checkbox>
		  </el-form-item>	
		</el-form>	  
	  
	  <span slot="footer" class="dialog-footer">
	    <el-button @click="dialogVisible = false">取 消</el-button>
	     <el-button type="primary" v-loading="loading"  @click="submitForm('ruleForm')">立即保存</el-button>
	  </span>
	</el-dialog>


	</section>
</template>

<script>

import {RegularActivity,RegularActivitySave} from '@/common/service/activityMana.js'
	
  export default {
    data() {
      return {
      	loading:false,
      	dialogVisible:false,
        tableData: [],
        ruleForm:{
        	giveYuncoinRegister:'0',
        	giveYuncoinCompleteFill:'0',
        	giveYuncoinFirstCardShare:'0',
        	giveYuncoinFirstLeafletShare:'0',
        	freeFirstCard:true,
        	freeFirstLeaflet:false, 
        },
        rules: {
          giveYuncoinRegister: [
            {required: true, message: '请输入注册送云贝个数', trigger: 'blur' },
          ],
          giveYuncoinCompleteFill: [
            {required: true, message: '请输入完整填完送云贝个数', trigger: 'blur' },
          ],
          giveYuncoinFirstCardShare: [
            {required: true, message: '请输入添加完首个名片并分享送云贝个数', trigger: 'blur' },
          ],
          giveYuncoinFirstLeafletShare: [
            {required: true, message: '请输入添加完首个传单并分享送云贝个数', trigger: 'blur' },
          ],          
        }        
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            
            	this._RegularActivitySave(this.ruleForm);
            
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },    	
     _RegularActivity(){
     	RegularActivity().then((res)=>{
				this.tableData = [res];
				this.ruleForm =  Object.assign({},res);
				this.ruleForm.giveYuncoinRegister = String(this.ruleForm.giveYuncoinRegister);
	        	this.ruleForm.giveYuncoinCompleteFill  = String(this.ruleForm.giveYuncoinCompleteFill);
	        	this.ruleForm.giveYuncoinFirstCardShare = String(this.ruleForm.giveYuncoinFirstCardShare);
	        	this.ruleForm.giveYuncoinFirstLeafletShare = String(this.ruleForm.giveYuncoinFirstLeafletShare);
     	}).catch((res)=>{
     		this.$message({
     			type:'error',
     			message:res.message
     		})
     	})
     },
	 _RegularActivitySave(opt){
	 	this.loading = true;
	 	RegularActivitySave(opt).then((res)=>{
     		this.$message({
     			type:'success',
     			message:'修改成功'
     		})
     		this.loading = false;
     		this._RegularActivity();
     		this.dialogVisible = false;
	 	}).catch((res)=>{
	 		this.loading = false;
     		this.$message({
     			type:'error',
     			message:res.message
     		})	 		
	 	})
	 	
	 }

    },
    mounted(){
    	this._RegularActivity();
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