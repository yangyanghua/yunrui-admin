<template>
	<section>
		<h1 class="userName">{{userDetail.username}}</h1>
		<div class="userInfoCon">
			<el-tabs type="border-card" v-model="activeName" @tab-click="handleClick(true)" >
			  <el-tab-pane label="基本资料" name="1">
				
				<ul class="infoList">
					<li class="infoItem">
						<span class="infoLable">上次登录：</span>
						<p class="info">{{userDetail.loginTime}}</p>
					</li>
					<li class="infoItem">
						<span class="infoLable">用户状态：</span>
						<p class="info">{{userDetail.status}}</p>
					</li>
					<li class="infoItem">
						<span class="infoLable">注册时间：</span>
						<p class="info">{{userDetail.registerTime}}</p>
					</li>
					<li class="infoItem">
						<span class="infoLable">客户组：</span>
						<p class="info">{{userDetail.vip}}</p>
					</li>
					<!--<li class="infoItem">
						<span class="infoLable">所属区域：</span>
						<p class="info">{{}}</p>
					</li>-->
					<li class="infoItem">
						<span class="infoLable">手机号码：</span>
						<p class="info">{{userDetail.phone}}</p>
					</li>		
					<li class="infoItem">
						<span class="infoLable">姓名：</span>
						<p class="info">{{userDetail.username}}</p>
					</li>						
				</ul>
				     
			  </el-tab-pane>
			  <el-tab-pane label="余额记录" name="2">
			  	
				  <el-table  :data="tableData1"   border   style="width: 100%">
				    <el-table-column  prop="amount"  label="总额"  width="180">
				    </el-table-column>
				    <el-table-column  prop="balance"  label="余额"  width="180">
				    </el-table-column>
				    <el-table-column  prop="currency"   label="货币">
				    </el-table-column>
				    <el-table-column  prop="remark"   label="备注">
				    </el-table-column>				    
				    <el-table-column  prop="time"   label="时间">
				    </el-table-column>				    
				    <el-table-column  prop="type"   label="类型">
				    </el-table-column>
				  </el-table>			  	
			  	
			  </el-tab-pane>
			  <el-tab-pane label="云贝记录" name="3">
			  	
				  <el-table  :data="tableData1"   border   style="width: 100%">
				    <el-table-column  prop="amount"  label="总额"  width="180">
				    </el-table-column>
				    <el-table-column  prop="balance"  label="余额"  width="180">
				    </el-table-column>
				    <el-table-column  prop="currency"   label="货币">
				    </el-table-column>
				    <el-table-column  prop="remark"   label="备注">
				    </el-table-column>				    
				    <el-table-column  prop="time"   label="时间">
				    </el-table-column>				    
				    <el-table-column  prop="type"   label="类型">
				    </el-table-column>			  	
			  	 </el-table>		
			  	 
			  	 
			  </el-tab-pane>
			  <el-tab-pane label="订单记录" name="4">

				  <el-table :data="tableData2" border style="width: 100%">
				    <el-table-column   prop="tradeNo"  label="编号"  >
				    </el-table-column>
				    
				    <el-table-column prop="name"  label="传单"  width="180">
						 <template slot-scope="scope">
								<p>{{scope.row.leaflet.title}}</p>
						</template>				    	
				    </el-table-column>
				    <el-table-column  prop="amount"  label="总价">
				    </el-table-column>					    
				    <el-table-column  prop="createTime"  label="创建时间">
				    </el-table-column>
				    <el-table-column  prop="payTime"  label="支付时间">
				    </el-table-column>
				    <el-table-column  prop="statusRemark"  label="状态">
				    </el-table-column>	
				    <el-table-column  prop="subStatusRemark"  label="提交状态">
				    </el-table-column>					    
				    <el-table-column  prop="remark"  label="备注">
				    </el-table-column>					    
				  </el-table>
			  	
			  	
			  </el-tab-pane>
			  <el-tab-pane label="名片信息" name="5">
					  	
				  <el-table :data="tableData3" border style="width: 100%">		    
				    <el-table-column  prop="realname" label="姓名" width="80" >	
					</el-table-column>
				    <el-table-column  prop="companyName" label="公司名称">
					</el-table-column>
				    <el-table-column  prop="companyMain" label="职位">
					</el-table-column>			
				    <el-table-column  prop="phone" label="电话">
					</el-table-column>
				    <el-table-column  prop="email" label="邮箱">
					</el-table-column>
				    <el-table-column  prop="createTime" label="创建时间" width="180">
					</el-table-column>			
				    <el-table-column  prop="servExpireTime" label="到期时间" width="180">
					</el-table-column>	
				    <el-table-column  prop="servStatus" label="状态" width="80">
					</el-table-column>
				  </el-table>			  	
			  	
			  </el-tab-pane>
			  <el-tab-pane label="传单信息" name="6">
			  	
				  <el-table :data="tableData4" border style="width: 90%">
				    <el-table-column  prop="id" width="80" label="ID" >
				    </el-table-column>
				    <el-table-column  prop="descr" label="图片">
				      <template slot-scope="scope">
					        <img v-if="scope.row.images" :src="scope.row.images.split(',')[0]" style="width: 80px; height: 80px;" />
					        <p v-else style="color: #666;">无图片</p>
				      </template>			    	
					</el-table-column>		    
				    
				    <el-table-column  prop="descr" label="文字内容">	
					</el-table-column>
				    <el-table-column  prop="price" label="价格（元）">
					</el-table-column>
					
				    <el-table-column  prop="servStatus" label="状态">
					</el-table-column>			        
				  </el-table>			  	
					  	
			  </el-tab-pane>
			  <el-tab-pane label="名片收藏记录" name="7">
			  	
				  <el-table :data="tableData5" border style="width: 100%">		    
				    <el-table-column  prop="realname" label="姓名" width="80" >	
					</el-table-column>
				    <el-table-column  prop="companyName" label="公司名称">
					</el-table-column>
				    <el-table-column  prop="companyMain" label="职位">
					</el-table-column>			
				    <el-table-column  prop="phone" label="电话">
					</el-table-column>
				    <el-table-column  prop="email" label="邮箱">
					</el-table-column>
				    <el-table-column  prop="createTime" label="创建时间" width="180">
					</el-table-column>			
				    <el-table-column  prop="servExpireTime" label="到期时间" width="180">
					</el-table-column>	
				    <el-table-column  prop="servStatus" label="状态" width="80">
					</el-table-column>
				  </el-table>				  	
			  	
			  </el-tab-pane>
			  <el-tab-pane label="传单收藏记录" name="8">
			  	
				  <el-table :data="tableData6" border style="width: 100%">
				    <el-table-column  prop="id" width="80" label="ID" >
				    </el-table-column>
				    <el-table-column  prop="descr" label="图片">
				      <template slot-scope="scope">
					        <img v-if="scope.row.images" :src="scope.row.images.split(',')[0]" style="width: 80px; height: 80px;" />
					        <p v-else style="color: #666;">无图片</p>
				      </template>			    	
					</el-table-column>		    
				    
				    <el-table-column  prop="descr" label="文字内容">	
					</el-table-column>
				    <el-table-column  prop="price" label="价格（元）">
					</el-table-column>
					
				    <el-table-column  prop="servStatus" label="状态">
					</el-table-column>
				  </el-table>				  	
			  	
			  </el-tab-pane>
			  <el-tab-pane label="名片分享记录" name="9">

				  <el-table :data="tableData7" border style="width: 100%">		    
				    <el-table-column  prop="realname" label="姓名" width="80" >	
					</el-table-column>
				    <el-table-column  prop="companyName" label="公司名称">
					</el-table-column>
				    <el-table-column  prop="companyMain" label="职位">
					</el-table-column>			
				    <el-table-column  prop="phone" label="电话">
					</el-table-column>
				    <el-table-column  prop="email" label="邮箱">
					</el-table-column>
				    <el-table-column  prop="createTime" label="创建时间" width="180">
					</el-table-column>			
				    <el-table-column  prop="servExpireTime" label="到期时间" width="180">
					</el-table-column>	
				    <el-table-column  prop="servStatus" label="状态" width="80">
					</el-table-column>
				  </el-table>	
			  	
			  </el-tab-pane>
			  <el-tab-pane label="传单分享记录" name="10">

				  <el-table :data="tableData8" border style="width: 100%">
				    <el-table-column  prop="id" width="80" label="ID" >
				    </el-table-column>
				    <el-table-column  prop="descr" label="图片">
				      <template slot-scope="scope">
					        <img v-if="scope.row.images" :src="scope.row.images.split(',')[0]" style="width: 80px; height: 80px;" />
					        <p v-else style="color: #666;">无图片</p>
				      </template>			    	
					</el-table-column>		    
				    
				    <el-table-column  prop="descr" label="文字内容">	
					</el-table-column>
				    <el-table-column  prop="price" label="价格（元）">
					</el-table-column>
					
				    <el-table-column  prop="servStatus" label="状态">
					</el-table-column>
				  </el-table>
			  	
			  </el-tab-pane>
			  <el-tab-pane label="评论记录" name="11">
			  	
				  <el-table :data="tableData9" border style="width: 100%">
				    <el-table-column  prop="content" label="文字内容" >
				    </el-table-column>
				    <el-table-column   label="图片">
				      <template slot-scope="scope">
					        <img v-if="scope.row.images" :src="scope.row.images.split(',')[0]" style="width: 80px; height: 80px;" />
					        <p v-else style="color: #666;">无图片</p>
				      </template>			    	
					</el-table-column>		    
				    
				    <el-table-column  prop="opposes" label="踩">	
					</el-table-column>
				    <el-table-column  prop="praises" label="赞">
					</el-table-column>
				    <el-table-column  prop="replyType" label="replyType">
					</el-table-column>
				    <el-table-column  prop="replys" label="replys">
					</el-table-column>
				    <el-table-column  prop="status" label="状态">
					</el-table-column>
				  </el-table>			  	
			  	
			  	
			  </el-tab-pane>
			</el-tabs>
		   <div class="pagi" v-if="activeName!=1&&activeName!=5" >
			   <el-pagination
			      @size-change="handleSizeChange"
			      @current-change="handleCurrentChange"
			      :current-page="1"
			      :page-sizes="[10, 20, 30, 40]"
			      :page-size="10"
			      layout="total, sizes, prev, pager, next, jumper"
			      :total="total">
			    </el-pagination>	   	
		   </div>
			
		</div>
		
	</section>
</template>

<script>
	
import {userRecord,userOrder,userCard,userLeaflet,userCardCollection,userLeafletCollection,userCardShare,userLeafletShare,userComment}	from '@/common/service/user.js'

  export default {
    data() {
      return {
    	activeName:'1',
    	userDetail:{},
      	form:{
      		page:0,
      		size:10,
      		sort:'',
      		userId:'', 
      	},
      	total:0,
      	tableData1:[],
      	tableData2:[],
      	tableData3:[],
      	tableData4:[],
      	tableData5:[],
      	tableData6:[],
      	tableData7:[],
      	tableData8:[],
      	tableData9:[],
      	form1:{
      		page:0,
      		size:10,
      		sort:'',
      		accountId :'',
      		currency:'rmb', 
      	}
      	
      }
    },
    methods: {
    	
	    handleSizeChange(val) {
	        this.form.size = val
			this.form.page = 0;
	        this.form1.size = val
			this.form1.page = 0;			
			this.handleClick(false);  
	      },
	    handleCurrentChange(val) {
			this.form.page = val-1;
			this.form1.page =val-1;		
			this.handleClick(false);    
	      }	,    	
		handleClick(reset){
			if(reset){
				this.form.page = 0;
				this.form.size = 10;
				this.form1.page = 0;
				this.form1.size = 10;				
			}
			if(this.activeName==2){
				this._userRecord(this.form1);
			}else if(this.activeName==3){
				this.form1.currency = 'yuncoin'
				this._userRecord(this.form1);
			}else if(this.activeName==4){
				this._userOrder(this.form);
			}else if(this.activeName==5){
				this._userCard(this.form);
			}else if(this.activeName==6){
				this._userLeaflet(this.form);
			}else if(this.activeName==7){
				this._userCardCollection(this.form);
			}else if(this.activeName==8){
				this._userLeafletCollection(this.form);
			}else if(this.activeName==9){
				this._userCardShare(this.form);
			}else if(this.activeName==10){
				this._userLeafletShare(this.form);
			}else {
				this._userComment(this.form);
			}
		},
		getUserDetail(){
			this.userDetail = JSON.parse(sessionStorage.getItem('userDetail'))||'';
			this.form.userId = this.userDetail.id;
			this.form1.accountId = 	this.userDetail.accountId;	
			if(!this.userDetail){
				this.$router.push({ path: '/userlist' });
			}
		},
		_userRecord(opt){
			
			userRecord(opt).then((res)=>{
				this.tableData1 = res.content;
				this.total = res.totalElements;
			}).catch((res)=>{
				this.$message.error(res.message);
			})
			
		},
		_userOrder(opt){
			userOrder(opt).then((res)=>{
				    this.tableData2 = res.content;
					this.total = res.totalElements;
			}).catch((res)=>{
				this.$message.error(res.message);
			})	
		},
		_userCard(opt){
			userCard(opt).then((res)=>{
					this.tableData3 = res;
			}).catch((res)=>{
				this.$message.error(res.message);
			})	
		},		
		_userLeaflet(opt){
			userLeaflet(opt).then((res)=>{
					this.tableData4 = res.content;
					this.total = res.totalElements;
			}).catch((res)=>{
				this.$message.error(res.message);
			})	
		},	
		_userCardCollection(opt){
			userCardCollection(opt).then((res)=>{
					this.tableData5 = res.content;
					this.total = res.totalElements;
			}).catch((res)=>{
				this.$message.error(res.message);
			})	
		},			
		_userLeafletCollection(opt){
			userLeafletCollection(opt).then((res)=>{
					this.tableData6 = res.content;
					this.total = res.totalElements;
			}).catch((res)=>{
				this.$message.error(res.message);
			})	
		},			
		_userCardShare(opt){
			userCardShare(opt).then((res)=>{
					this.tableData7 = res.content;
					this.total = res.totalElements;
			}).catch((res)=>{
				this.$message.error(res.message);
			})	
		},			
		_userLeafletShare(opt){
			userLeafletShare(opt).then((res)=>{
					this.tableData8 = res.content;
					this.total = res.totalElements;
			}).catch((res)=>{
				this.$message.error(res.message);
			})	
		},				
		_userComment(opt){
			userComment(opt).then((res)=>{
				   
				   this.tableData9 = res.content;
				   this.total = res.totalElements;
				   
			}).catch((res)=>{
				this.$message.error(res.message);
			})	
		},			
		
		
    },
    mounted(){
    	this.getUserDetail();
    }
  }
</script>

<style lang="scss" scoped="scoped">
	.userName{
		height: 60px;
		line-height: 60px;
		font-size: 26px;
	}
	.userInfoCon{
		width: 100%;
	
	}
	.infoList{
		list-style: none;
		width: 100%;
		height: auto;
		.infoItem{
			list-style: none;
			height: 40px;
			line-height: 40px;
			.infoLable{
				float: left;
				width: 100px;
				text-align: right;
			}
			.info{
				text-align: left;
				width: 74%;
				overflow: hidden;
			}
		}		
	}
	.pagi{
		height: 100px;
		width: 100%;
		text-align: center;
		margin-top: 30px;
	}
	
</style>