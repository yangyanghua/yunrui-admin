<template>
	<section>
		
	<div class="formContent">
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm" v-loading="dataloding" >
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
			  :before-upload="beforeAvatarUpload"
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
		      	
				  <el-select v-model="ruleForm.addr_province" placeholder="省份" @change= "provinceChange"  >
				    <el-option
				      v-for="item in province"
				      :key="item.id"
				      :label="item.name"
				      :value="item.name">
				    </el-option>
				  </el-select>
		      
		      </el-form-item>
		    </el-col>
		    <el-col class="line" :span="1">&nbsp;</el-col>
		    <el-col :span="7">
		      <el-form-item prop="addr_city" >
				  <el-select v-model="ruleForm.addr_city"  @change= "cityChange" placeholder="城市">
				    <el-option
				      v-for="item in citys"
				      :key="item.id"
				      :label="item.name"
				      :value="item.name">      
				    </el-option>
				  </el-select>
		      </el-form-item>
		    </el-col>
		    <el-col class="line" :span="1">&nbsp;</el-col>
		    <el-col :span="7">
		      <el-form-item prop="addr_district"  >
				  <el-select v-model="ruleForm.addr_district" placeholder="地区">
				    <el-option
				      v-for="item in districts"
				      :key="item.id"
				      :label="item.name"
				      :value="item.name">
				    </el-option>
				  </el-select>
		      </el-form-item>
		    </el-col>		    
		    
		  </el-form-item>
		  <el-form-item label="展会详细地址" prop="addr_details">
		    <el-input  v-model="ruleForm.addr_details"></el-input>
		  </el-form-item>
		  

		  <el-form-item label="展会地址经纬度" required>
		    <el-col :span="7">
		      <el-form-item prop="addr_longitude"  >
		      	  
		      	    <el-input v-model="ruleForm.addr_longitude"></el-input>

		      </el-form-item>
		    </el-col>
		    <el-col class="line" :span="1">&nbsp;</el-col>
		    <el-col :span="7">
		      <el-form-item prop="addr_latitude" >
					
					  <el-input v-model="ruleForm.addr_latitude"></el-input>
					
		      </el-form-item>
		    </el-col>
		  </el-form-item>

		   <p style="color: red;margin-left: 120px;">在地图上找到地址位置，点击即可获得地址经纬度。</p>
		  <el-form-item label="" prop="map" style="position: relative;" >
		  	
		   <div id="container"></div>
			<div id="myPageTop">
			    <table>
			        <tr>
			            <td>
			                <label>按关键字搜索：</label>
			            </td>
			            <td class="column2">
			                <label>左击获取经纬度：</label>
			            </td>
			        </tr>
			        <tr>
			            <td>
			                <input type="text" placeholder="请输入关键字进行搜索" id="tipinput">
			            </td>
			            <td class="column2">
			                <input type="text" readonly="true" id="lnglat">
			            </td>
			        </tr>
			    </table>
			</div>		   
		   
		   

		  </el-form-item>		  
		  
		  
		  
		  
		  
		  <el-form-item label="展会描述" prop="descr">
		    <el-input type="textarea" v-model="ruleForm.descr"></el-input>
		  </el-form-item>
		  <el-form-item>
		    <el-button type="primary" @click="submitForm('ruleForm')" v-loading="loading" >立即创建</el-button>
		    <el-button @click="$router.push({path:'/specActivity'})">返回</el-button>
		  </el-form-item>
		</el-form>		
	</div>	



	</section>
</template>

<script>

import {getSpecialActivity,getArea,upload,addSpecialActivity} from '@/common/service/activityMana.js'
	
  export default {
    data() {
      return {
      	dataloding:false,
      	map:{},
      	allprovince:[],
      	allCitys:[],
      	allDistricts:[],
      	province:[],
      	citys:[],
      	districts:[],      	      	
        dialogImageUrl: '',
        dialogVisible: false,
        loading:false,
        ruleForm: {
				id:'',//integer(query)	id不传为新增
				name:'',// *string(query)	展会名称
				theme:'',// *string(query)	展会主题
				imagesList:[],
				images:'', //*string(query)	展会图片,多张用逗号隔开	
				descr:'',// *string(query)	展会描述
				enterPay:0,// *number(query)	参加费用
				enterPayCurrency:['rmb'],// *string(query)	参加费用支付的币种,两种 rmb佘额/yuncoin云贝
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

          addr_province: [
            { required: true, message: '请选择展会地址省份', trigger: 'blur' },
          ],		
          addr_city: [
            { required: true, message: '请选择展会地址市', trigger: 'blur' },
          ],
          addr_district: [
            { required: false, message: '请选择展会地址区', trigger: 'blur' },
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
          	if(!this.ruleForm.addr_latitude||!this.ruleForm.addr_longitude){
       			this.$message({
      				type:'error',
      				message:'地址经纬度不能为空'
      			})             		
          		return false;
          	}        	
          	this.loading = true;
          	let arr = []; 
          	this.ruleForm.imagesList.forEach((item)=>{
          		arr.push(item.url)
          	})
          	this.ruleForm.enterPayCurrency = this.ruleForm.enterPayCurrency.join(',');
			this.ruleForm.enterEndTime =  this.ruleForm.enterEndTime.Format('yyyy-MM-dd');
			this.ruleForm.startTime = this.ruleForm.startTime.Format('yyyy-MM-dd');
			this.ruleForm.endTime   = this.ruleForm.endTime.Format('yyyy-MM-dd');       	
          	this.ruleForm.images = arr.join(',');  
            this._addSpecialActivity(this.ruleForm);
          
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      beforeAvatarUpload(file){
	        const isJPG = file.type === 'image/jpeg';
	        const isPNG = file.type === 'image/png';
	        const isLt1M = file.size / 1024 / 1024 < 1;
	
	        if (!isJPG&&!isPNG) {
	          this.$message.error('上传图片只能是 JPG、PNG 格式!');
	          return false;
	        }
	        if (!isLt1M) {
	          this.$message.error('上传图片大小不能超过 1MB!');
	          return false;
	        }
	        

	  		let fd = new FormData();
		    
		    fd.append('file',file);

	        upload(fd).then((res)=>{
			
			let img = {
				name:'xxx',
				url:'http://outmao.com:8088/yr/'+res[0]
			};
			
			this.ruleForm.imagesList.push(img);
	        	
	        }).catch((res)=>{
	        	this.$message.error(res.message);
	        })
	        
	        return false     	
      },
      provinceChange(val){
      	let vm = this;
      	let pid1  = '';
      	let pid2  = '';
      	this.citys = [];
      	this.districts = [];        	
      	vm.allprovince.forEach((item)=>{
      		if(item.name==val){
      			pid1 = item.id;
      		}
      	});
      	
      	vm.allCitys.forEach((item)=>{
      		if(item.parentId==pid1){
      			vm.citys.push(item);
      		}
      	})
				
		if(vm.citys.length>0){
	      	pid2 = vm.citys[0].id;
	      	//vm.ruleForm.addr_city = vm.citys[0].name;
	      	vm.allDistricts.forEach((item)=>{
	       		if(item.parentId==pid2){
	      			vm.districts.push(item);
	      		}     		
	      		
	      	})
	      	if(vm.districts.length>0){
	      		//this.ruleForm.addr_district = vm.districts[0].name; 
	      	}		
		}

      
      	
      },
      cityChange(val){
      	let vm = this;
      	let pid  = '';
      	this.districts = [];        	
      	vm.citys.forEach((item)=>{
      		if(item.name==val){
      			pid = item.id;
      		}
      	});
      	
      	vm.allDistricts.forEach((item)=>{
      		
       		if(item.parentId==pid){
      			vm.districts.push(item);
      		}     		
      		
      	})

      	if(vm.districts.length>0){
      		//this.ruleForm.addr_district = vm.districts[0].name; 
      	}
      
      	
      },      
      _addSpecialActivity(opt){
      	
      		addSpecialActivity(opt).then((res)=>{
       			let t = '';
       			if(opt.id){
       				t = '编辑成功'
       			}else{
       				t = '新增成功'
       			}
       			this.$message({
      				type:'success',
      				message:t
      			});  
      			this.loading = false;
      			this.$router.push({path:'/specActivity'});

      		}).catch((res)=>{
      			this.ruleForm.enterPayCurrency = this.ruleForm.enterPayCurrency.split(',');
				this.ruleForm.enterEndTime =  new Date(this.ruleForm.enterEndTime);
				this.ruleForm.startTime = new Date(this.ruleForm.startTime);
				this.ruleForm.endTime   = new Date(this.ruleForm.endTime);       			
      			this.loading = false;
       			this.$message({
      				type:'error',
      				message:res.message
      			})     	      			
      		})
      	
      },
      
      
      _getArea(){	
      	let vm = this;
      		getArea().then((res)=>{
      			
      			this.areaData = res;
      			
      			res.forEach((item)=>{
      				if(item.level==1){
      					vm.allprovince.push(item);
      				}else if(item.level==2){
      					vm.allCitys.push(item);
      				}else {
      					vm.allDistricts.push(item);	
      				}	
      			});
      			vm.province = vm.allprovince;
				let id = this.$route.query.id;
				if(id){
					this._getSpecialActivity(id);	
				}	
      			
      		}).catch((res)=>{
       			this.$message({
      				type:'error',
      				message:res.message
      			})     			
      		})
      	
      },
      _getSpecialActivity(id){
      	   let vm = this;
      	   this.dataloding  = true;
      		getSpecialActivity({id:id}).then((res)=>{

				this.ruleForm.id = res.id 
				this.ruleForm.name = res.name
				this.ruleForm.theme = res.theme 
				this.ruleForm.descr = res.descr
				this.ruleForm.enterPay = String(res.enterPay)    
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
				 this.dataloding  = false;
      		}).catch((res)=>{
      			this.dataloding  = false;
      			this.$message({
      				type:'error',
      				messag:res.message
      			})
      			
      		})
      	
      },
      
	 initMap(){
			   let vm = this;	
			   window.onLoad  = function(){
					vm.map = new AMap.Map('container',{zoom:12,resizeEnable: true});
						  
				    var clickEventListener = vm.map.on('click', function(e) {
				        document.getElementById("lnglat").value = e.lnglat.getLng() + ',' + e.lnglat.getLat()
				        
				        vm.ruleForm.addr_longitude = e.lnglat.getLng();
				        vm.ruleForm.addr_latitude = e.lnglat.getLat(); 
				        
				    });
				    var auto = new AMap.Autocomplete({
				        input: "tipinput"
				    });
				    AMap.event.addListener(auto, "select", select);//注册监听，当选中某条记录时会触发
				    function select(e) {
				        if (e.poi && e.poi.location) {
				            vm.map.setZoom(15);
				            vm.map.setCenter(e.poi.location);
				        }
				    }						  
						   
					 }
					  var url = 'https://webapi.amap.com/maps?v=1.4.8&key=468631da176556b1d279127c9e611066&callback=onLoad&plugin=AMap.Scale,AMap.Autocomplete';
					  var jsapi = document.createElement('script');
					  jsapi.charset = 'utf-8';
					  jsapi.src = url;
					  document.head.appendChild(jsapi);	
					  
					  
					  
			}
      
      
      
      
    },
    mounted(){

		this._getArea();
		this.initMap();
		
		
    }
  }
</script>

<style lang="scss" scoped="scoped">
	.tap{
		height: 60px;
		line-height: 60px;
		width: 100%;
	}
	#container{
		height: 600px;
		width: 800px;
	}
	#myPageTop{
		position: absolute;
		top: 9px;
		background: #fff;
		right:-208px
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