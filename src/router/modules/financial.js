
import balance from '@/modules/financial/balance/index.vue';
import tradingList from '@/modules/financial/tradingList/index.vue';
import yuncoin from '@/modules/financial/yuncoin/index.vue';
export default [
	{path: 'financial/balance',component: balance,name:'余额明细'},
	{path: 'financial/yuncoin',component: yuncoin,name:'云贝明细'},
	{path: 'tradingList',component: tradingList,name:'交易列表'},
];
