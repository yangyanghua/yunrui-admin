<template>
	<section>
		<!--<div class="tap">
			<el-button>导出用户</el-button>
		</div>-->
		<div class="formContent" style="margin-top: 20px;" >
	        <el-form :inline="true" :model="searchForm" class="demo-form-inline">   

	          <el-form-item label="关键字"> 
	            <el-input size="medium" class="input_150" v-model="searchForm.keyword" placeholder="请输入搜索关键字"></el-input>
	          </el-form-item>  
	          <el-form-item>
	            <el-button type="primary" size="medium" @click="search" icon="el-icon-search" >搜索</el-button>
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
		    <el-table-column  prop="score" label="代理分">
			</el-table-column>
		    <el-table-column  prop="commissionRate" label="佣金成分比例">
			</el-table-column>
		    <el-table-column  prop="rechargeRate" label="充值成分比例">
			</el-table-column>	
		    <el-table-column  prop="profitAmount" width="200" label="总收益">
			</el-table-column>			        
		    <!--<el-table-column  label="操作">
		      <template slot-scope="scope">
		        <el-button @click="handleClick(scope.row)" type="text" size="small">查看详情</el-button>
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


	</section>
</template>

<script>



import {agentList} from '@/common/service/agent.js'
	
  export default {
    data() {
      return {
      	regdate:'',
      	total:0,
      	searchForm:{
      		page:0,
      		size:10,
//    		sort:'',
//    		keyword:'',      		
      	},
      	currentPage4:1,
        tableData: [],      	

      }
    },
    /*列表全选*/
    watch: {

    },
    methods: {
     _getAgentList(opt){
     	agentList(opt).then((res)=>{
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
		this._getAgentList(this.searchForm);     	
     },
	 handleClick(row){
	 	 this.$router.push({ path: '/userdetail' });
	 },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.searchForm.size = val
		this.searchForm.page = 0;
		this._getAgentList(this.searchForm);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
		this.searchForm.page = val-1;
		this._getAgentList(this.searchForm);        
      }	
    },
    mounted(){
    	this._getAgentList(this.searchForm);
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