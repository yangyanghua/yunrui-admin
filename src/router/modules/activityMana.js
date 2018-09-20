
import specActivity from '@/modules/activityMana/components/specActivity/index.vue';
import specActDetail from '@/modules/activityMana/components/specActivity/detail.vue';

import RegularActivity from '@/modules/activityMana/components/RegularActivity/index.vue';
import redActivity from '@/modules/activityMana/components/redActivity/index.vue';


export default [
	{path: 'specActivity',component: specActivity,name:'专场活动'},
	{path: 'specActivity/detail',component: specActDetail,name:'新增/编辑专场活动'},
	{path: 'RegularActivity',component: RegularActivity,name:'平台活动'},
	{path: 'redActivity',component: redActivity,name:'红包活动'},
	
];
