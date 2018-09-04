
import specActivity from '@/modules/activityMana/components/specActivity/index.vue';
import specActDetail from '@/modules/activityMana/components/specActivity/detail.vue';

export default [
	{path: 'specActivity',component: specActivity,name:'专场活动'},
	{path: 'specActivity/detail',component: specActDetail,name:'新增/编辑活动'},
];
