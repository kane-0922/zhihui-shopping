import request from '@/utils/request'

export const getAddressList = () => {
  return request.get('/address/list')
}

// 添加地址
export const addAddressList = () => {
  return request.post('/address/add', {
    form: {
      name: '小鱼',
      phone: 17261450919,
      region: [
        {
          value: 782,
          label: '上海'
        },
        {
          value: 783,
          label: '上海市'
        },
        {
          value: 785,
          label: '徐汇区'
        }
      ],
      detail: '北京路1号楼8888室'
    }
  })
}
