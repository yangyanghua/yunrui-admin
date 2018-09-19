
import massMsg from '@/modules/message/massMsg/index.vue';
import msgList from '@/modules/message/msgList/index.vue';


export default [
	{path: 'message',component: msgList,name:'消息列表'},
	{path: 'massmsg',component: massMsg,name:'群发消息'},
];
