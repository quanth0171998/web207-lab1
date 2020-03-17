import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landscape',
  templateUrl: './landscape.component.html',
  styleUrls: ['./landscape.component.css']
})
export class LandscapeComponent implements OnInit {
  landscapes:Array<any> = [
    {
      id: 1,
      name: 'Làng Sen quê Bác',
      img: 'https://vntrip.cdn.vccloud.vn/cam-nang/wp-content/uploads/2017/07/l%C3%A0ng-kim-li%C3%AAn.jpg',
      area: 155,
      history: 'Làng Sen hay làng Kim Liên là nơi đã sinh thành và nuôi dưỡng nên vị lãnh tụ vĩ đại của dân tộc ta. Sau luỹ tre xanh cùng những hàng cau là ngôi nhà lá 5 gian đơn sơ, mộc mạc của gia đình cụ phó bảng Nguyễn Sinh Sắc, thân phụ của Chủ tịch Hồ Chí Minh. Hiện nay, dẫu thời gian đã trôi qua rất lâu nhưng các kỷ vật trong gian nhà của cụ Sắc vẫn còn được giữ lại hầu như nguyên vẹn từ chiếc rương, chiếc tủ, mâm gỗ cho đến cả chiếc án thư, bộ phản, nghiên mực…',
      namePerson: 'Bác Hồ',
      imgPerson:'https://thanhtra.com.vn/portals/0/news_images/2018/08/congdinh/bac_ho_voi_khuc_hat_dan_ca.jpg',
      birthday: '19-5-1980',
      dateDeath: '2-9-1969'
    },
    {
      id: 2,
      name: 'Bảo tàng vua Quang Trung',
      img: 'https://vntrip.cdn.vccloud.vn/cam-nang/wp-content/uploads/2018/03/4-bao-tang-quangtrung-vntrip-e1521702783127.jpg',
      area: 200,
      history: 'Bình Định vốn là vùng đất gắn liền với tên tuổi của vị vua Quang Trung ngày nào. Bởi vậy, khi tới đây bạn hãy dành ra chút thời gian để ghé thăm bảo tàng vua Quang Trung để có thể hiểu biết thêm về lịch sử và vị anh hùng này nhé!',
      namePerson: 'Vua Quang Trung',
      imgPerson:'https://znews-photo.zadn.vn/w660/Uploaded/jbvunte/2018_01_04/vua_quangtrung.jpg',
      birthday: '19-5-1980',
      dateDeath: '2-9-1969'
    },
    {
      id: 3,
      name: 'Cầu Hàm Rồng',
      img: 'https://phongbanve.vn/public/uploads/images/images/ThanhHoa/thanhhoa-hamrong.jpg',
      area: 40,
      history: 'Hàm Rồng cách trung tâm thành phố Thanh Hoá 4 km, ở dọc trục đường Quốc lộ 1A. Trong tương lai không xa nơi đây sẽ là khu du lịch văn hoá sinh thái hấp dẫn của Thanh Hoá. Thắng tích Hàm Rồng gồm một quần thể núi, sông kỳ tú, sơn thủy hữu tình:',
      namePerson: 'Đào Duy Từ',
      imgPerson:'https://quangbinhtourism.vn/wp-content/uploads/2019/06/dao_duy_tu.jpg',
      birthday: '1572',
      dateDeath: '1634'
    },
    {
      id: 4,
      name: 'Chùa Keo',
      img: 'https://timeoutvietnam.com/files/2016/04/22/6-diem-den-cuc-hap-dan-o-thai-binh-5.jpg',
      area: 123,
      history: 'Chùa Keo tọa lạc tại xã Duy Nhất, huyện Vũ Thư là ngôi cổ tự nổi tiếng bậc nhất ở Việt Nam đã được Bộ Văn hóa công nhận là di tích lịch sử - văn hóa quốc gia. Công trình kiến trúc nổi tiếng của chùa Keo là gác chuông cao 11,04m với 3 tầng mái. Tầng một có treo một khánh đá dài 1,87m. Trên tầng hai là quả chuông được đúc năm 1686 và tầng ba là nơi có chuông đúc năm 1796.',
      namePerson: 'Trần Thủ Ðộ ',
      imgPerson:'https://znews-photo.zadn.vn/w660/Uploaded/mdf_nsozxd/2018_08_30/tran_thu_do.jpg',
      birthday: '1194',
      dateDeath: '1264'
    },
    {
      id: 5,
      name: 'Chùa Một Cột',
      img: 'https://mytourcdn.com/upload_images/Image/Location/24_2_2015/9-Du-lich-chua-mot-cot-mytour-1.jpg',
      area: 600,
      history: 'Chùa nổi trên mặt hồ là nhờ vào một hệ thống những thanh gỗ tạo thành cấu trúc rắn chắc hỗ trợ, trông giống như một bông hoa sen mọc thẳng lên từ hồ.',
      namePerson: 'Mạc Đĩnh Chi',
      imgPerson:'https://w1.trithucvn.net/wp-content/uploads/2017/08/00-4.jpg',
      birthday: '1280',
      dateDeath: '1346'
    }
  ];
  addLandscape = {
    id: null,
    name: null,
    img: null,
    area: null,
    history: null,
    namePerson: null,
    imgPerson: null,
    birthday: null,
    dateDeath: null,
  }
  addNewLandscape(event){
    let maxId=0;
    this.landscapes.forEach(function(val, index){
      if(val.id >= maxId){
        maxId=val.id;
      }
    });
    this.addLandscape.id = ++maxId;
    this.landscapes.push(this.addLandscape);
    console.log(this.addLandscape.id);
    this.addLandscape = {
      id: null,
      name: null,
      img: null,
      area: null,
      history: null,
      namePerson: null,
      imgPerson: null,
      birthday:null,
      dateDeath: null
    }
  }
  editLandscape(landscape){
    this.addLandscape=landscape;
  }
  removeLandscape(landscape){
    this.landscapes = this.landscapes.filter(function(value, index){
      return value.id !=landscape.id;
    });
  }
  constructor() { }

  ngOnInit() {
  }

}