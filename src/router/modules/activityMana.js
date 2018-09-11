
import specActivity from '@/modules/activityMana/components/specActivity/index.vue';
import specActDetail from '@/modules/activityMana/components/specActivity/detail.vue';

import RegularActivity from '@/modules/activityMana/components/RegularActivity/index.vue';
import RegularActDetail from '@/modules/activityMana/components/RegularActivity/detail.vue';


export default [
	{path: 'specActivity',component: specActivity,name:'专场活动'},
	{path: 'specActivity/detail',component: specActDetail,name:'新增/编辑专场活动'},
	{path: 'RegularActivity',component: RegularActivity,name:'平台活动'},
	{path: 'RegularActivity/detail',component: RegularActDetail,name:'新增/编辑平台活动'},	
];
