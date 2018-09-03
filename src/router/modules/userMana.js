import userlist from '@/modules/userMana/components/userlist/index.vue';
import userdetail from '@/modules/userMana/components/userlist/detail.vue';
import vcardlist from '@/modules/userMana/components/vcardlist/index.vue';
import vcarddetail from '@/modules/userMana/components/userlist/detail.vue';
import flyerlist from '@/modules/userMana/components/flyerlist/index.vue';
import flyerdetail from '@/modules/userMana/components/flyerlist/detail.vue';


export default [
	{path: 'userlist',component: userlist,name:'用户列表'},
	{path: 'userdetail',component: userdetail,name:'用户详情',hidden:true},
	{path: 'vcardlist',component: vcardlist,name:'名片列表'},
	{path: 'vcarddetail',component: vcarddetail,name:'名片详情',hidden:true},
	{path: 'flyerlist',component: flyerlist,name:' 传单列表'},
	{path: 'flyerdetail',component: flyerdetail,name:'传单详情',hidden:true},	

];
