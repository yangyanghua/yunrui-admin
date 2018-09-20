import order from '@/modules/sales/order/index.vue';
import yuncoinRecord from '@/modules/sales/yuncoinRecord/index.vue';
import balanceRecord from '@/modules/sales/balanceRecord/index.vue';

export default [
	{path: 'sales/order',component: order,name:'订单管理'},
	{path: 'sales/yuncoin',component: yuncoinRecord,name:'云贝记录'},
	{path: 'sales/balance',component: balanceRecord,name:'佘额记录'},
];
