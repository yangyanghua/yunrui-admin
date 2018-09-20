<template>
	<section>
		<div class="formContent" style="margin: 20px 0;width: 100%;" >
				<el-menu :default-active="searchForm.type" class="el-menu-demo" mode="horizontal" @select="handleSelect">
				  <el-menu-item index="1">年度统计</el-menu-item>
				  <el-menu-item index="2">季度统计</el-menu-item>
				  <el-menu-item index="3">月度统计</el-menu-item>
				</el-menu>		
		</div>
		<div class="tableContent">
		  <el-table :data="tableData" border style="width: 100%">
		    <el-table-column  prop="id" width="80" label="ID" >
		      <template slot-scope="scope">
		        <p>{{scope.row.id.split('_')[0]}}</p>
		      </template>			    	
		    </el-table-column>
		    <el-table-column  prop="activeUserCount" label="活跃用户数">
			</el-table-column>
		    <el-table-column  prop="tradeAmount" label="交易总金额">
			</el-table-column>	
		    <el-table-column  prop="tradeUserCount" label="交易人数">
			</el-table-column>				
		    <el-table-column  prop="rechargeUserCount" label="充值人数">
			</el-table-column>				
		    <el-table-column  prop="rechargeAmount" label="充值总金额">
			</el-table-column>	
		    <el-table-column  prop="rechargeYuncoinAmount" label="充值云币总金额">
			</el-table-column>				
		    <el-table-column  prop="commissionAmount" label="佣金总数">
			</el-table-column>					
		    <el-table-column  prop="statusRemark" label="状态">
			</el-table-column>			        
		    <!--<el-table-column  label="操作">
		      <template slot-scope="scope">
		        <el-button @click="handleClick(scope.row.id)" type="text" size="small">查看详情</el-button>
		      </template>		    		
		    </el-table-column>-->
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

		  
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="dialogVisible = false">取 消</el-button>
		  </span>
		</el-dialog>


	</section>
</template>

<script>



import {agentStatistics,agentApplyCheck} from '@/common/service/agent.js'
	
  export default {
    data() {
      return {
      	subloaidng:false,
      	dialogVisible:false,
      	regdate:'',
      	total:0,    	
      	searchForm:{
      		page:0,
      		size:10,
      		type:'1',      		
      	},
      	currentPage4:1,
        tableData: [],      	

      }
    },
    /*列表全选*/
    watch: {

    },
    methods: {
      handleSelect(key, keyPath) {
        
        this.searchForm.type = key;

		this._agentStatistics(this.searchForm);

      },  	
     _agentStatistics(opt){
     	agentStatistics(opt).then((res)=>{
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
		this._agentStatistics(this.searchForm);     	
     },
	 handleClick(id){
	 	 
	 	 this.ruleForm.id = id;
	 	 this.dialogVisible = true;
	 	 

	 },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.searchForm.size = val
		this.searchForm.page = 0;
		this._agentStatistics(this.searchForm);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
		this.searchForm.page = val-1;
		this._agentStatistics(this.searchForm);        
      }	
    },
    mounted(){
    	this._agentStatistics(this.searchForm);
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