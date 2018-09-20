
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

//用户详情
export const userRecord = httpService + 'yr/api/admin/finance/record/pageByAccount';//余额记录接口
export const userOrder = httpService + 'yr/api/admin/order/pageByBuyer';//订单记录接口
export const userCard = httpService + 'yr/api/admin/card/listByUser';//名片信息接口
export const userLeaflet = httpService + 'yr/api/admin/leaflet/pageByUser';//传单信息接口
export const userCardCollection = httpService + 'yr/api/admin/card/collection/pageByUser';//名片收藏 
export const userLeafletCollection = httpService + 'yr/api/admin/leaflet/collection/pageByUser';//传单收藏 
export const userCardShare = httpService + 'yr/api/admin/card/share/pageByUser';//名片分享 
export const userLeafletShare = httpService + 'yr/api/admin/leaflet/share/pageByUser';//传单分享 
export const userComment = httpService + 'yr/api/admin/leaflet/comment/pageByUser';//评论记录接口 
           

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


//消息
export const messageList = httpService + 'yr/api/admin/message/page';//消息列表
export const massMessageList = httpService + 'yr/api/admin/message/send';//群发消息


//代理商
export const agentList = httpService + 'yr/api/admin/agent/page';//获取代理商列表
export const agentApply = httpService + 'yr/api/admin/agent/apply/save';//用户申请成功代理商
export const agentApplyList = httpService + 'yr/api/admin/agent/apply/page';//代理商申请列表
export const agentApplyCheck = httpService + 'yr/api/admin/agent/apply/check';//代理商申请审核
export const agentProfitRecord = httpService + 'yr/api/admin/agent/ProfitRecord/page';//取所有代理商分成收益明细
export const agentPageByUser = httpService + 'yr/api/admin/agent/ProfitRecord/pageByUser';//单个代理商分成收益
export const agentStatistics = httpService + 'yr/api/admin/agent/statistics/page';//获取所有代理商当前统计列表
export const agentStatisticsByid = httpService + 'yr/api/admin/agent/statistics/pageByUser';//获取某个代理商统计列表

//财务管理
export const financeAccount = httpService + 'yr/api/admin/finance/account/get';//获取用户的资金帐号
export const financePageByAccount = httpService + 'yr/api/admin/finance/record/pageByAccount';//获取用户的收支明细接口
export const financePageByAccountAndTime = httpService + 'yr/api/admin/finance/record/pageByAccountAndTime';//获取用户某个时间内的交易记录
export const financeTotalInOut = httpService + 'yr/api/admin/finance/record/totalInOut';//获取用户某个时间内的总收入支出
export const financeTrade = httpService + 'yr/api/admin/finance/trade/page';//获取所有交易


//销售管理
export const allOrderList = httpService + '/yr/api/admin/order/page';//获取所有订单












