<template>
	<section>

		<div class="tableContent">
		  <el-table :data="tableData" border style="width: 90%">
		    <el-table-column  prop="id" width="80" label="ID" >
		    </el-table-column>
		    <el-table-column  prop="title" label="标题">	
			</el-table-column>		    
		    <el-table-column  prop="descr" label="图片">
		      <template slot-scope="scope">
			        <img v-if="scope.row.image" :src="scope.row.image.split(',')[0]" style="width: 80px; height: 80px;" />
			        <p v-else style="color: #666;">无图片</p>
		      </template>			    	
			</el-table-column>		    
		    <el-table-column  prop="content" label="文字内容" width="300" >	
			</el-table-column>
		    <el-table-column label="类型">
			      <template slot-scope="scope">
						<p>{{typeTxt[scope.row.type]}}</p>	
			      </template>		    	
		    	
			</el-table-column>			
		    <el-table-column  prop="price" label="发送者">
			      <template slot-scope="scope">
						<p>{{scope.row.fromUser.nickname}}</p>	
			      </template>			    	
			</el-table-column>
		    <el-table-column  prop="price" label="接收者">
			      <template slot-scope="scope">
						<p>{{scope.row.toUser.nickname}}</p>	
			      </template>			    	
			</el-table-column>			
		    <el-table-column  prop="linkType" label="链接类型">
			      <template slot-scope="scope">
						<p>{{linkTypeTxt[scope.row.linkType]}}</p>	
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

import {messageList} from '@/common/service/message.js'
	
  export default {
    data() {
      return {
      	regdate:'',
      	total:0,
      	searchForm:{
      		page:0,
      		size:10,
      		sort:'',
      	},
      	typeTxt:['系统消息','其他消息'],
      	linkTypeTxt:['关联其他','关联URL','关联名片','关联传单','关联订单','关联活动','关联红包'],	
      	currentPage4:1,
        tableData: [],      	

      }
    },
    /*列表全选*/
    watch: {

    },
    methods: {
     _messageList(opt){
     	messageList(opt).then((res)=>{
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
		this._messageList(this.searchForm);     	
     },
	 handleClick(row){
	 	// this.$router.push({ path: '/userdetail' });
	 },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.searchForm.size = val
		this.searchForm.page = 0;
		this._messageList(this.searchForm);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
		this.searchForm.page = val-1;
		this._messageList(this.searchForm);        
      }	
    },
    mounted(){
    	this._messageList(this.searchForm);
    }
  }
</script>

<style lang="scss" scoped="scoped">
.tableContent{
	margin-top: 30px;
}
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