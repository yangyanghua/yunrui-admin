<template>
	<section>

		<div class="formContent" style="margin: 20px 0;">

			<el-menu :default-active="searchForm.status" class="el-menu-demo" mode="horizontal" @select="handleSelect">
			  
			  <el-menu-item index="">全部</el-menu-item>
			  <el-menu-item index="0">未支付</el-menu-item>
			  <el-menu-item index="1">已支付</el-menu-item>
			  <el-menu-item index="2">交易完成</el-menu-item>
			  <el-menu-item index="3">交易关闭</el-menu-item>

			</el-menu>

		</div>

		<div class="tableContent">
			<el-table :data="tableData" border style="width: 100%">
				<el-table-column prop="createTime" width="180" label="创建时间">
				</el-table-column>
				<el-table-column prop="tradeNo" width="220" label="交易编号">
				</el-table-column>
				<el-table-column prop="amount" label="交易金额">
				</el-table-column>
				<el-table-column  label="用户ID">
			      <template slot-scope="scope">
			        <p>{{scope.row.buyer.id}}</p>
			      </template>						
				</el-table-column>					
				<el-table-column  label="用户账号" width="150">
			      <template slot-scope="scope">
			        <p>{{scope.row.buyer.username}}</p>
			      </template>						
				</el-table-column>					
				<el-table-column  label="用户昵称">
			      <template slot-scope="scope">
			        <p>{{scope.row.buyer.nickname}}</p>
			      </template>						
				</el-table-column>		
				<el-table-column prop="statusRemark" label="状态">
				</el-table-column>				
				<el-table-column prop="remark" label="备注">
				</el-table-column>

				<!--<el-table-column  label="操作">
		      <template slot-scope="scope">
		        <el-button @click="handleClick(scope.row)" type="text" size="small">查看详情</el-button>
		      </template>		    		
		    </el-table-column>-->
			</el-table>
		</div>
		<div class="pagi">
			<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[10, 20, 30, 40]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="total">
			</el-pagination>
		</div>

	</section>
</template>

<script>
	
	import { allOrderList } from '@/common/service/sales.js'
	


	export default {
		data() {
			return {
				total: 0,
				searchForm: {
					page: 0,
					size: 10,
					type:'3', 
					status:'',		
				},
				currentPage4: 1,
				tableData: [],
			}
		},

		methods: {
			getToken() {
				return JSON.parse(sessionStorage.getItem('user'));
			},
		    handleSelect(key, keyPath) {

		        this.searchForm.status = key;
		        this._allOrderList(this.searchForm);
		    },		

			handleSizeChange(val) {

				this.searchForm.size = val
				this.searchForm.page = 0;
				this._allOrderList(this.searchForm);
			},
			handleCurrentChange(val) {
				this.searchForm.page = val - 1;
				this._allOrderList(this.searchForm);
			},

			_allOrderList(opt){
				
				allOrderList(opt).then((res)=>{
					this.tableData = res.content;
					this.total = res.totalElements;
				}).catch((res)=>{
					this.$message({  
						type: 'error',
						message: res.message
					})							
				})
				
			},
			
			init(){

				this._allOrderList(this.searchForm);
			}
			
		},
		mounted() {
			this.init();
			
		}
	}
</script>

<style lang="scss" scoped="scoped">

	
	.el-table__header {
		text-align: center;
	}
	
	.pagi {
		width: 90%;
		text-align: center;
		margin-top: 30px;
	}
</style>