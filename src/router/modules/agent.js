

import agentList from '@/modules/agentMana/list.vue';
import agentDetail from '@/modules/agentMana/detail.vue';
export default [
	{path: 'agentList',component: agentList,name:'代理商列表'},
	{path: 'agentList/detail',component: agentDetail,name:'代理商审核'},
];
