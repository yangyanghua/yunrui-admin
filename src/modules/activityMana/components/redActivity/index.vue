<template>
	<section>

		<div class="formContent" style="margin-top: 20px;" >
	        <el-form :inline="true" :model="searchForm" class="demo-form-inline">   

	          <el-form-item label="关键字"> 
	            <el-input size="medium" class="input_150" v-model="searchForm.keyword" placeholder="请输入搜索关键字"></el-input>
	          </el-form-item>  
	          <el-form-item>
	            <el-button type="primary" size="medium" @click="search" icon="el-icon-search" >搜索</el-button>
	            <el-button type="primary" size="medium" @click="$router.push({path:'/specActivity/detail'})" icon="el-icon-search" >新建展会</el-button>
	            
	            
	          </el-form-item>
	        </el-form>			
		</div>
		<div class="tableContent">
		  <el-table :data="tableData" border style="width: 90%">		    
		    <el-table-column  prop="id" label="ID" width="80" >	
			</el-table-column>
		    <el-table-column  prop="name" label="红包名称">
			</el-table-column>		
		    <el-table-column   prop="sendName" label="发送者">	    	
			</el-table-column>
		    <el-table-column   prop="totalAmount" label="总金额">	    	
			</el-table-column>
		    <el-table-column   prop="totalNum" label="发放人数">	    	
			</el-table-column>
		    <el-table-column   prop="receivedNum" label="已领人数">	    	
			</el-table-column>
		    <el-table-column  label="发放范围">
		      <template slot-scope="scope">
			       <p>{{scope.row.sendScope}}</p>
		      </template>			    	
			</el-table-column>

		    <el-table-column  prop="status" label="状态" >
		      <template slot-scope="scope">
			       
			       <p>{{scope.row.status}}</p>

		      </template>			    	
			</el-table-column>

		    <el-table-column  label="操作">
		      <template slot-scope="scope">
		        <el-button @click="handleClick(scope.row)" type="text" size="small">查看详情</el-button>
		        <el-button @click="handleClick(scope.row)" type="text" size="small">退款</el-button>
		      </template>		    		
		    </el-table-column>
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

import {RedPacketList,RedPacketRefund} from '@/common/service/activityMana.js'
	
  export default {
    data() {
      return {
      	regdate:'',
      	total:0,
      	searchForm:{
      		page:0,
      		size:10,
      		sort:'',
      		keyword:'',
      	},
      	currentPage4:1,
        tableData: [],      	

      }
    },
    /*列表全选*/
    watch: {

    },
    methods: {
     _RedPacketList(opt){
     	RedPacketList(opt).then((res)=>{
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
		this._RedPacketList(this.searchForm);     	
     },
	 handleClick(row){
	 	// this.$router.push({ path: '/userdetail' });
	 },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.searchForm.size = val
		this.searchForm.page = 0;
		this._RedPacketList(this.searchForm);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
		this.searchForm.page = val-1;
		this._RedPacketList(this.searchForm);        
      }	
    },
    mounted(){
    	this._RedPacketList(this.searchForm);
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