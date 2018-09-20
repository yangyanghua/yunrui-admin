<template>
	<section>
		<div class="tap">
			<span class="balance active">账户余额：{{balanceInfo.balance}}元</span>
			<span class="balance">冻结：{{balanceInfo.frozen}}元</span>
			<span class="balance">预付款：{{balanceInfo.advance}}元</span>
		</div>
		<div class="formContent" style="margin-top: 20px;">
			<el-form :inline="true" :model="searchForm" class="demo-form-inline">

				<el-form-item label="日期选择">
					<el-date-picker v-model="value7" type="daterange" align="right" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions2">
					</el-date-picker>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" size="medium" @click="search" icon="el-icon-search">查询</el-button>
				</el-form-item>
			</el-form>
		</div>

		<div class="tap">
			<span class="balance">总收入：{{inOutInfo[0]}}元</span>
			<span class="balance">总支出：{{inOutInfo[1]}}元</span>
		</div>
		<div class="tableContent">
			<el-table :data="tableData" border style="width: 100%">
				<el-table-column prop="id" width="80" label="ID">
				</el-table-column>
				<el-table-column prop="tradeNo" label="交易编号">
				</el-table-column>
				<el-table-column prop="areaCode" label="区域">
				</el-table-column>
				<el-table-column prop="amount" label="金额">
				</el-table-column>
				<el-table-column prop="balance" label="余额">
				</el-table-column>
				<el-table-column prop="type" label="类型">
				</el-table-column>
				<el-table-column prop="remark" label="说明">
				</el-table-column>
				<el-table-column prop="time" width="200" label="时间">
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
	
	import { financeAccount,financeTotalInOut,financePageByAccountAndTime } from '@/common/service/financial.js'
	
	import { agentList } from '@/common/service/agent.js'

	export default {
		data() {
			return {
				pickerOptions2: {
					shortcuts: [{
						text: '最近一周',
						onClick(picker) {
							const end = new Date();
							const start = new Date();
							start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
							picker.$emit('pick', [start, end]);
						}
					}, {
						text: '最近一个月',
						onClick(picker) {
							const end = new Date();
							const start = new Date();
							start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
							picker.$emit('pick', [start, end]);
						}
					}, {
						text: '最近三个月',
						onClick(picker) {
							const end = new Date();
							const start = new Date();
							start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
							picker.$emit('pick', [start, end]);
						}
					}]
				},
				value7: '',
				regdate: '',
				total: 0,
				searchForm: {
					page: 0,
					size: 10,
					accountId:'',
					currency:'rmb',
					startTime:'',
					endTime:'',			
				},
				inOutForm:{
					accountId:'',
					currency:'rmb',
					startTime:'',
					endTime:'', 
				},
				currentPage4: 1,
				tableData: [],
				userInfo:{},
				balanceInfo:{},
				inOutInfo:[],
			}
		},

		methods: {
			getToken() {
				return JSON.parse(sessionStorage.getItem('user'));
			},
			search() {
				
				this.inOutForm.startTime = this.value7[0].Format('yyyy-MM-dd');
				this.inOutForm.endTime = this.value7[1].Format('yyyy-MM-dd');
				this.searchForm.startTime = this.inOutForm.startTime;
				this.searchForm.endTime = this.inOutForm.endTime;				
				this.searchForm.page = 0;
				this._financeTotalInOut(this.inOutForm);
				this._financePageByAccountAndTime(this.searchForm);
				
				
			},
			handleSizeChange(val) {

				this.searchForm.size = val
				this.searchForm.page = 0;
				this._financePageByAccountAndTime(this.searchForm);
			},
			handleCurrentChange(val) {
				this.searchForm.page = val - 1;
				this._financePageByAccountAndTime(this.searchForm);
			},
			
			_financeAccount(id){
				
				financeAccount({id:id}).then((res)=>{
					let vm = this;
					res.assets.forEach((item)=>{
						if(item.currency==='rmb'){
							vm.balanceInfo = item;
						}
					})
				}).catch((res)=>{
					this.$message({
						type: 'error',
						message: res.message
					})					
				})
				
			},
			_financeTotalInOut(opt){
				
				financeTotalInOut(opt).then((res)=>{
					
					this.inOutInfo = res;
					
				}).catch((res)=>{
					this.$message({
						type: 'error',
						message: res.message
					})						
				})
				
			},
			_financePageByAccountAndTime(opt){
				
				financePageByAccountAndTime(opt).then((res)=>{
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
				this.userInfo = this.getToken();
				this.inOutForm.accountId = this.userInfo.accountId;
				this.searchForm.accountId = this.userInfo.accountId;
				const end = new Date();
				const start = new Date();
				start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
				this.inOutForm.startTime = start.Format('yyyy-MM-dd');
				this.inOutForm.endTime = end.Format('yyyy-MM-dd');
				this.searchForm.startTime = this.inOutForm.startTime;
				this.searchForm.endTime = this.inOutForm.endTime;
				this.value7 = [start,end];
				this._financeTotalInOut(this.inOutForm);
				this._financeAccount(this.userInfo.accountId);
				this._financePageByAccountAndTime(this.searchForm);
			}
			
		},
		mounted() {
			this.init();
			
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.tap {
		height: 60px;
		line-height: 60px;
		width: 100%;
		.balance {
			font-size: 26px;
			margin-right: 20px;
			color: #666;
			&.active {
				color: #333;
				font-size: 36px;
			}
		}
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