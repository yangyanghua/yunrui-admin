
//基础接口
export const getArea = '/api/yr/api/area/list';
export const upload = '/api/yr/api/upload/admin';


//导航管理
export const navigation_getAll = '/api/yr/api/admin/menu/list';
export const login = '/api/yr/api/admin/login';
export const logout = '/api/yr/api/admin/logout';


export const userList = '/api/yr/api/admin/user/page';//用户列表
export const cardList = '/api/yr/api/admin/card/page';//名片列表
export const leafletList = '/api/yr/api/admin/leaflet/page';//传单列表


//活动管理
export const SpecialActivity = '/api/yr/api/admin/activity/SpecialActivity/page';//专场活动列表
export const SpecialActLeaflet = '/api/yr/api/admin/activity/SpecialActivity/leaflet/page';//展会活动传单
export const addSpecialActivity = '/api/yr/api/admin/activity/SpecialActivity/save';//创建展会活动
export const getSpecialActivity = '/api/yr/api/admin/activity/SpecialActivity/get';//获取展会详情
export const RegularActivity = '/api/yr/api/admin/activity/RegularActivity/get';//平台活动列表
export const RegularActivitySave = '/api/yr/api/admin/activity/RegularActivity/save';//保存平台活动列表
export const RedPacketList = '/api/yr/api/admin/activity/RedPacket/page';//红包活动列表
export const RedPacketRefund = '/api/yr/api/admin/activity/RedPacket/refund';//红包活动退款
export const RedPacketSave = '/api/yr/api/admin/activity/RedPacket/save';//新增编辑红包活动

//代理商模块
export const getAgentList = '/api/yr/api/admin/agent/page';//获取代理商列表
export const getAgentStatisticsr = '/api/yr/api/admin/agent/statistics/pageByUser';//获取某个代理商统计列表
export const statisticsPage = '/api/yr/api/admin/agent/statistics/page';//获取所有代理商当前统计列表
export const getIncomeRecordBuyUser = '/api/yr/api/admin/agent/IncomeRecord/pageByUser';//获取某个代理商分成收益明细
export const getIncomeRecord = '/api/yr/api/admin/agent/IncomeRecord/page';//获取代理商分成收益明细
export const userApplyBeAgent = '/api/yr/api/admin/agent/apply/save';//用户申请成为代理商
export const ApplyAgentList = '/api/yr/api/admin/agent/apply/page';//获取代理商申请列表
export const ApplyAgent = '/api/yr/api/admin/agent/apply/check';//审核代理商