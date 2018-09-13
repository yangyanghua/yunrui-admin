<template>
	<section>
		
	<div class="formContent">
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
		  <el-form-item label="活动名称" prop="name">
		    <el-input v-model="ruleForm.name"></el-input>
		  </el-form-item>
		  <el-form-item label="展会主题" prop="name">
		    <el-input v-model="ruleForm.name"></el-input>
		  </el-form-item>		  
		  <el-form-item label="展会联系人" prop="name">
		    <el-input v-model="ruleForm.name"></el-input>
		  </el-form-item>
		  <el-form-item label="展会联系人电话" prop="name">
		    <el-input v-model="ruleForm.name"></el-input>
		  </el-form-item>
		  <el-form-item label="展会图片" prop="region">
			<el-upload
			  action=""
			  list-type="picture-card"
			  :file-list="ruleForm.fileList"
			  :on-preview="handlePictureCardPreview"
			  :on-remove="handleRemove">
			  <i class="el-icon-plus"></i>
			</el-upload>
			<el-dialog :visible.sync="dialogVisible">
			  <img width="100%" :src="dialogImageUrl" alt="">
			</el-dialog>					
		  </el-form-item>
		  <el-form-item label="参展费用" prop="name">
		    <el-input v-model="ruleForm.name"></el-input>
		  </el-form-item>			  

		  <el-form-item label="费用币种" prop="type">
		    <el-checkbox-group v-model="ruleForm.type">
		      <el-checkbox label="人民币" name="type"></el-checkbox>
		      <el-checkbox label="云贝" name="type"></el-checkbox>
		    </el-checkbox-group>
		  </el-form-item>		  
		  
		  <el-form-item label="报名方式" prop="name">
		    <el-input v-model="ruleForm.name"></el-input>
		  </el-form-item>		  
		  <el-form-item label="报名截至时间" prop="name">
		   <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
		  </el-form-item>			  

		  <el-form-item label="展会开始时间" prop="name">
		   <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
		  </el-form-item>
		  <el-form-item label="展会结束时间" prop="name">
		   <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
		  </el-form-item>
		  
		  <el-form-item label="展会地址" required>
		    <el-col :span="7">
		      <el-form-item prop="date1"  >
		      	
				  <el-select v-model="ruleForm.name" placeholder="请选择">
				    <el-option
				      v-for="item in options"
				      :key="item.value"
				      :label="item.label"
				      :value="item.value">
				    </el-option>
				  </el-select>
		      
		      </el-form-item>
		    </el-col>
		    <el-col class="line" :span="1">&nbsp;</el-col>
		    <el-col :span="7">
		      <el-form-item prop="date2" >
				  <el-select v-model="ruleForm.name" placeholder="请选择">
				    <el-option
				      v-for="item in options"
				      :key="item.value"
				      :label="item.label"
				      :value="item.value">
				    </el-option>
				  </el-select>
		      </el-form-item>
		    </el-col>
		    <el-col class="line" :span="1">&nbsp;</el-col>
		    <el-col :span="7">
		      <el-form-item prop="date2"  >
				  <el-select v-model="ruleForm.name" placeholder="请选择">
				    <el-option
				      v-for="item in options"
				      :key="item.value"
				      :label="item.label"
				      :value="item.value">
				    </el-option>
				  </el-select>
		      </el-form-item>
		    </el-col>		    
		    
		  </el-form-item>
		  <el-form-item label="展会详细地址" prop="desc">
		    <el-input  v-model="ruleForm.desc"></el-input>
		  </el-form-item>
		  <el-form-item label="展会描述" prop="desc">
		    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
		  </el-form-item>
		  <el-form-item>
		    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
		    <el-button @click="resetForm('ruleForm')">重置</el-button>
		  </el-form-item>
		</el-form>		
	</div>	



	</section>
</template>

<script>

import {SpecialActivity} from '@/common/service/activityMana.js'
	
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],      	
        dialogImageUrl: '',
        dialogVisible: false,      	
        ruleForm: {
          fileList:[],
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }   	

      }
    },

    watch: {

    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },    	
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    mounted(){

    }
  }
</script>

<style lang="scss" scoped="scoped">
	.tap{
		height: 60px;
		line-height: 60px;
		width: 100%;
	}

	.pagi{
		width: 90%;
		text-align: center;
		margin-top: 30px;
	}
	.formContent{
		width: 700px;
		margin-top: 30px;
	}
</style>