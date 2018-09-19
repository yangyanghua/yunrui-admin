

import agentList from '@/modules/agentMana/list.vue';
import agentAudit from '@/modules/agentMana/audit.vue';
import agentStatistical from '@/modules/agentMana/statistical.vue';
export default [
	{path: 'agentList',component: agentList,name:'代理商列表'},
	{path: 'agentAudit',component: agentAudit,name:'代理商审核'},
	{path: 'agentStatistical',component: agentStatistical,name:'代理商统计'},
];
