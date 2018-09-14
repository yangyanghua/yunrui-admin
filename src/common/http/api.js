
let httpService='/api/';

//基础接口
export const getArea = httpService + 'yr/api/area/list';
export const upload = httpService+'yr/api/upload/admin';


//导航管理
export const navigation_getAll = httpService + 'yr/api/admin/menu/list';
export const login = httpService + 'yr/api/admin/login';
export const logout = httpService+ 'yr/api/admin/logout';


export const userList = httpService + 'yr/api/admin/user/page';//用户列表
export const cardList = httpService + 'yr/api/admin/card/page';//名片列表
export const leafletList = httpService + 'yr/api/admin/leaflet/page';//传单列表


//活动管理
export const SpecialActivity = httpService + 'yr/api/admin/activity/SpecialActivity/page';//专场活动列表
export const SpecialActLeaflet = httpService + 'yr/api/admin/activity/SpecialActivity/leaflet/page';//展会活动传单
export const addSpecialActivity = httpService+ 'yr/api/admin/activity/SpecialActivity/save';//创建展会活动
export const getSpecialActivity = httpService + 'yr/api/admin/activity/SpecialActivity/get';//获取展会详情
export const RegularActivity =  httpService + 'yr/api/admin/activity/RegularActivity/get';//平台活动列表
export const RegularActivitySave = httpService + 'yr/api/admin/activity/RegularActivity/save';//保存平台活动列表
export const RedPacketList = httpService + 'yr/api/admin/activity/RedPacket/page';//红包活动列表
export const RedPacketRefund = httpService + 'yr/api/admin/activity/RedPacket/refund';//红包活动退款
export const RedPacketSave =  httpService + 'yr/api/admin/activity/RedPacket/save';//新增编辑红包活动

//代理商模块
export const getAgentList = httpService + 'yr/api/admin/agent/page';//获取代理商列表
export const getAgentStatisticsr = httpService + 'yr/api/admin/agent/statistics/pageByUser';//获取某个代理商统计列表
export const statisticsPage =  httpService + 'yr/api/admin/agent/statistics/page';//获取所有代理商当前统计列表
export const getIncomeRecordBuyUser = httpService + 'yr/api/admin/agent/IncomeRecord/pageByUser';//获取某个代理商分成收益明细
export const getIncomeRecord = httpService + 'yr/api/admin/agent/IncomeRecord/page';//获取代理商分成收益明细
export const userApplyBeAgent = httpService + 'yr/api/admin/agent/apply/save';//用户申请成为代理商
export const ApplyAgentList =  httpService + 'yr/api/admin/agent/apply/page';//获取代理商申请列表
export const ApplyAgent = httpService + 'yr/api/admin/agent/apply/check';//审核代理商