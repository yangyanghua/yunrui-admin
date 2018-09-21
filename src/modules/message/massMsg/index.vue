<template>
	<section>

		<div class="formContent">

			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
				<el-form-item label="标题" prop="title">
					<el-input v-model="ruleForm.title"></el-input>
				</el-form-item>
				<el-form-item label="接收用户ID" prop="toUserId">
					<el-input v-model="ruleForm.toUserId" style="width: 200px;"></el-input>
					<span class="psmsg">ps:不填为群发</span>
				</el-form-item>
				<el-form-item label="图片" prop="name">
					<el-upload v-loading="uploading" class="avatar-uploader" action="" :show-file-list="false" :before-upload="beforeAvatarUpload">
						<img v-if="ruleForm.image" :src="ruleForm.image" class="avatar">
						<i v-else class="el-icon-plus avatar-uploader-icon"></i>
					</el-upload>
				</el-form-item>
				<el-form-item label="城市" prop="areaCodes">
					<p class="psmsg">如果传群发消息时只给该城市的用户发消息</p>
					<el-tree :data="areadata" v-loading="a_loading" show-checkbox node-key="id" ref="tree" highlight-current :props="defaultProps">
					</el-tree>
				</el-form-item>
				<el-form-item label="消息类型" prop="type">
					<el-radio-group v-model="ruleForm.type">
						<el-radio label="0">系统消息</el-radio>
						<el-radio label="1">其他消息</el-radio>
					</el-radio-group>
				</el-form-item>

				<el-form-item label="关联对象类型" prop="linkType">
					<el-radio-group v-model="ruleForm.linkType">
						<el-radio label="1">关联URL</el-radio>
						<el-radio label="2">关联名片</el-radio>
						<el-radio label="3">关联传单</el-radio>
						<el-radio label="4">关联订单</el-radio>
						<el-radio label="5">关联活动</el-radio>
						<el-radio label="6">关联红包</el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item label="关联对象ID" prop="linkId" v-if="ruleForm.linkType!=1">
					<el-input v-model="ruleForm.linkId" style="width: 200px;"></el-input>
				</el-form-item>
				<el-form-item label="关联URL" prop="url" v-if="ruleForm.linkType==1">
					<el-input v-model="ruleForm.url"></el-input>
				</el-form-item>
				<el-form-item label="消息内容" prop="content">
					<el-input type="textarea" :rows="4" v-model="ruleForm.content"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="submitForm('ruleForm')" v-loading="subloading">立即发送</el-button>
				</el-form-item>
			</el-form>

		</div>
	</section>
</template>

<script>
	import { sendMessage } from '@/common/service/message.js'
	import { getArea, upload } from '@/common/service/activityMana.js'
	import {httpService} from '@/common/http/http.js';

	
	export default {
		data() {
			return {
				uploading: false,
				userInfo:{},
				ruleForm: {
					fromUserId: '', //integer(query)	发送用户ID			
					toUserId: '', // integer(query)	接收用户ID,不传为群发
					areaCodes: '', //	string(query)	城市号如020多个用逗号隔开，如果传群发消息时只给该城市的用户发消息
					type: '0', //integer(query)	0系统消息1其它消息
					linkType: '1', // *integer(query)	关联的对象类型:1关联URL;2关联名片;3关联传单;4关联订单;5关联活动;6关联红包	
					linkId: '', // integer(query)	关联的对象Id
					image: '', //string(query)	图片
					title: '', // *string	(query)	标题	
					url: '', // string(query)	URL linkType为1时传	
					content: '', // *string(query)内容
				},
				rules: {
					title: [{
						required: true,
						message: '请输入标题',
						trigger: 'blur'
					}, ],
					type: [{
						required: true,
						message: '请选择消息类型',
						trigger: 'blur'
					}, ],
					linkType: [{
						required: true,
						message: '请选择关联的对象类型',
						trigger: 'blur'
					}, ],
					content: [{
						required: true,
						message: '请输入消息内容',
						trigger: 'blur'
					}, ],

				},
				a_loading: true,
				subloading: false,
				areadata: [],
				alldata: [],
				defaultProps: {
					children: 'children',
					label: 'name'
				}

			}
		},

		methods: {
			getCheckedNodes() {
				console.log(this.$refs.tree.getCheckedNodes());
			},
			beforeAvatarUpload(file) {
				const isJPG = file.type === 'image/jpeg';
				const isPNG = file.type === 'image/png';
				const isLt1M = file.size / 1024 / 1024 < 1;

				if(!isJPG && !isPNG) {
					this.$message.error('上传图片只能是 JPG、PNG 格式!');
					return false;
				}
				if(!isLt1M) {
					this.$message.error('上传图片大小不能超过 1MB!');
					return false;
				}

				let fd = new FormData();

				fd.append('file', file);
				this.uploading = true;
				upload(fd).then((res) => {

					this.ruleForm.image = httpService + res[0];
					this.uploading = false;
				}).catch((res) => {
					this.uploading = false;
					this.$message.error(res.message);
				})

				return false
			},
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if(valid) {
						let arealist = this.$refs.tree.getCheckedNodes();
						let codeList = [];

						arealist.forEach((item) => {

							codeList.push(item.areacode);

						})
						this.ruleForm.fromUserId = this.userInfo.id;
						this.ruleForm.areaCodes = codeList.join(',');
						this.subloading = true;
						sendMessage(this.ruleForm).then((res) => {
							this.subloading = false;
							this.$message({
								type:'success',
								message:'发送成功'
							});
							
							this.$router.push({path:'/message'})
							
							
						}).catch((res) => {
							this.subloading = false;
							this.$message.error(res.message);
						})

					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			getToken(){
			  return JSON.parse(sessionStorage.getItem('user'));
			},
			_getArea() {
				let vm = this;
				this.a_loading = true;
				getArea().then((res) => {
					this.alldata = res;
					let allprovince = [],
						allCitys = [],
						allDistricts = [];
					res.forEach((item) => {
						if(item.level == 1) {
							allprovince.push(item);
						} else if(item.level == 2) {
							allCitys.push(item);
						} else {
							allDistricts.push(item);
						}
					});
					allCitys.forEach((item) => {
						item.children = [];
						allDistricts.forEach((item1) => {
							if(item.id == item1.parentId) {
								item.children.push(item1);
							}
						})

					})

					allprovince.forEach((item) => {
						item.children = [];
						allCitys.forEach((item1) => {
							if(item.id == item1.parentId) {
								item.children.push(item1);
							}
						})

					})

					this.areadata = allprovince;

					this.a_loading = false;

				}).catch((res) => {
					this.$message({
						type: 'error',
						message: res.message
					})
				})

			},
		},
		mounted() {
			this._getArea();
			this.userInfo = this.getToken();
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.formContent {
		margin-top: 30px;
	}
	
	.psmsg {
		margin: 0;
		margin-left: 20px;
		color: #999;
	}
	
	.demo-ruleForm {
		width: 70%;
	}
	
	.tap {
		height: 60px;
		line-height: 60px;
		width: 100%;
	}
	
	.el-table__header {
		text-align: center;
	}
	
	.pagi {
		width: 90%;
		text-align: center;
		margin-top: 30px;
	}
</style>