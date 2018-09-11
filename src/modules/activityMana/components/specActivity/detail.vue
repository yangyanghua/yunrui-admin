<template>
	<section>
		
	<div class="formContent">
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
		  <el-form-item label="活动名称" prop="name">
		    <el-input v-model="ruleForm.name"></el-input>
		  </el-form-item>
		  <el-form-item label="展会主题" prop="theme">
		    <el-input v-model="ruleForm.theme"></el-input>
		  </el-form-item>		  
		  <el-form-item label="展会联系人" prop="contact_name">
		    <el-input v-model="ruleForm.contact_name"></el-input>
		  </el-form-item>
		  <el-form-item label="展会联系人电话" prop="contact_phone">
		    <el-input v-model="ruleForm.contact_phone"></el-input>
		  </el-form-item>
		  <el-form-item label="展会图片" prop="imagesList">
			<el-upload
			  action=""
			  list-type="picture-card"
			  :file-list="ruleForm.imagesList"
			  :on-preview="handlePictureCardPreview"
			  :on-remove="handleRemove">
			  <i class="el-icon-plus"></i>
			</el-upload>
			<el-dialog :visible.sync="dialogVisible">
			  <img width="100%" :src="dialogImageUrl" alt="">
			</el-dialog>					
		  </el-form-item>
		  <el-form-item label="参展费用" prop="enterPay">
		    <el-input type="number" v-model="ruleForm.enterPay"></el-input>
		  </el-form-item>			  

		  <el-form-item label="费用币种" prop="enterPayCurrency">
		    <el-checkbox-group v-model="ruleForm.enterPayCurrency">
		      <el-checkbox label="rmb" name="rmb">人民币</el-checkbox>
		      <el-checkbox label="yuncoin" name="yuncoin">云贝</el-checkbox>
		    </el-checkbox-group>
		  </el-form-item>		  
		  
		  <el-form-item label="报名方式" prop="enterWay">
		    <el-input v-model="ruleForm.enterWay"></el-input>
		  </el-form-item>		  
		  <el-form-item label="报名截至时间" prop="enterEndTime">
		   <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.enterEndTime" style="width: 100%;"></el-date-picker>
		  </el-form-item>			  

		  <el-form-item label="展会开始时间" prop="startTime">
		   <el-date-picker type="date" placeholder="选择开始日期" v-model="ruleForm.startTime" style="width: 100%;"></el-date-picker>
		  </el-form-item>
		  <el-form-item label="展会结束时间" prop="endTime">
		   <el-date-picker type="date" placeholder="选择结束日期" v-model="ruleForm.endTime" style="width: 100%;"></el-date-picker>
		  </el-form-item>
		  
		  <el-form-item label="展会地址" required>
		    <el-col :span="7">
		      <el-form-item prop="addr_province"  >
		      	
				  <el-select v-model="ruleForm.addr_province" placeholder="省份">
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
		      <el-form-item prop="addr_city" >
				  <el-select v-model="ruleForm.addr_city" placeholder="城市">
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
		      <el-form-item prop="addr_district"  >
				  <el-select v-model="ruleForm.addr_district" placeholder="地区">
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
		  <el-form-item label="展会详细地址" prop="addr_details">
		    <el-input  v-model="ruleForm.addr_details"></el-input>
		  </el-form-item>
		  <el-form-item label="展会描述" prop="descr">
		    <el-input type="textarea" v-model="ruleForm.descr"></el-input>
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

import {getSpecialActivity} from '@/common/service/activityMana.js'
	
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
				id:'',//integer(query)	id不传为新增
				name:'',// *string(query)	展会名称
				theme:'',// *string(query)	展会主题
				imagesList:[],
				images:'', //*string(query)	展会图片,多张用逗号隔开	
				descr:'',// *string(query)	展会描述
				enterPay:0,// *number(query)	参加费用
				enterPayCurrency:'rmb',// *string(query)	参加费用支付的币种,两种 rmb佘额/yuncoin云贝
				enterWay:'',// *string(query)	报名方式
				enterEndTime:'',// *string(query)	展会报名截止时间，格式yyyy-MM-dd
				startTime:'',// *string(query)	展会开始时间，格式yyyy-MM-dd
				endTime:'',// *string(query)	展会结束时间，格式yyyy-MM-dd
				contact_name:'',// *string(query)	展会联系人
				contact_phone:'',// *string(query)	展会联系人电话
				addr_latitude:'',// *number(query)	展会位置纬度				
				addr_longitude:'',// *number(query)		展会位置经度	
				addr_province:'',// *string(query)	展会地址省份				
				addr_city:'',// *string(query)	展会地址市				
				addr_district:'', //*string(query)	展会地址区			
				addr_details:'',// *string(query)	展会地址详情
        },
        rules: {
          name: [
            { required: true, message: '请输入展会名称', trigger: 'blur' },
          ],
          theme: [
            { required: true, message: '请输入展会主题', trigger: 'blur' },
          ],          
          imagesList: [
            { type: 'array', required: true, message: '请至少上传一张展会图片', trigger: 'change' }
          ],          
          descr: [
            { required: true, message: '请输入展会描述', trigger: 'blur' },
          ],            
          enterPay: [
            { required: true, message: '请输入参加费用', trigger: 'blur' },
          ],           
          enterPayCurrency: [
            { type: 'array', required: true, message: '请至少选择一种参加费用支付的币种', trigger: 'change' }
          ], 
          enterWay: [
            { required: true, message: '请输入报名方式', trigger: 'blur' },
          ], 
          enterEndTime: [
            { type: 'date', required: true, message: '请选择展会报名截止时间', trigger: 'change' }
          ],
          startTime: [
            { type: 'date', required: true, message: '请选择展会开始时间', trigger: 'change' }
          ],
          endTime: [
            { type: 'date', required: true, message: '请选择展会结束时间', trigger: 'change' }
          ],
          contact_name: [
            { required: true, message: '请输入展会联系人', trigger: 'blur' },
          ],
          contact_phone: [
            { required: true, message: '请输入展会联系人电话', trigger: 'blur' },
          ],
          addr_latitude: [
            { required: true, message: '请选择展会位置纬度', trigger: 'blur' },
          ],
          addr_longitude: [
            { required: true, message: '请选择展会位置经度', trigger: 'blur' },
          ],
          addr_province: [
            { required: true, message: '请选择展会地址省份', trigger: 'blur' },
          ],		
          addr_city: [
            { required: true, message: '请选择展会地址市', trigger: 'blur' },
          ],
          addr_district: [
            { required: true, message: '请选择展会地址区', trigger: 'blur' },
          ],
          addr_details: [
            { required: true, message: '请输入展会地址详情', trigger: 'blur' },
          ],		
        }   	

      }
    },

    watch: {

    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
        this.ruleForm.imagesList =  fileList;
        
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
      },
      _getSpecialActivity(id){
      	   let vm = this;
      		getSpecialActivity({id:id}).then((res)=>{

				this.ruleForm.id = res.id 
				this.ruleForm.name = res.name
				this.ruleForm.theme = res.theme 
				this.ruleForm.descr = res.descr
				this.ruleForm.enterPay = res.enterPay    
				this.ruleForm.enterPayCurrency = res.enterPayCurrency.split(',') 
				this.ruleForm.enterWay = res.enterWay  
				this.ruleForm.enterEndTime = new Date(res.enterEndTime) 
				this.ruleForm.startTime = new Date(res.startTime)
				this.ruleForm.endTime = new Date(res.endTime)
				this.ruleForm.contact_name = res.contact.realname
				this.ruleForm.contact_phone = res.contact.telphone
				this.ruleForm.addr_latitude = res.address.latitude			
				this.ruleForm.addr_longitude = res.address.longitude		
				this.ruleForm.addr_province = res.address.province				
				this.ruleForm.addr_city = res.address.city				
				this.ruleForm.addr_district =  res.address.district			
				this.ruleForm.addr_details = res.address.details	
				 res.images.split(',').forEach((item,index)=>{
				 	vm.ruleForm.imagesList.push({name:index,url:item})
				 })
				
      		}).catch((res)=>{
      			
      			this.$message({
      				type:'error',
      				messag:res.message
      			})
      			
      		})
      	
      }
      
      
    },
    mounted(){
		let id = this.$route.query.id;
		if(id){
			this._getSpecialActivity(id);	
		}
		
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