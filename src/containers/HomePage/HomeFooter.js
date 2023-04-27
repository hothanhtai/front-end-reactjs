import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';



class HomeFooter extends Component {

    render() {

        return (
           <div className='section-search home-footer'>
                <div className='container'>
                    <div className='row'>
                                <div className='col-md-6'>
                                    <a href="/">
                                        <img src="https://bookingcare.vn/assets/icon/bookingcare-2020.svg" style={{ maxWidth : '200px',paddingBottom:'15px'}} alt="" />
                                    </a>
                                    <div className='footer-address'>
                                        <h4 style={{fontWeight:'bold'}}>Công ty cổ phần Công nghệ BookingCare</h4>
                                        <p>
                                            <span><i className='fas fa-heart' style={{marginRight:'2px'}}></i></span>
                                            Lô B4/D21, Khu đô thị mới Cầu Giấy, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Thành phố Hà Nội, Việt Nam
                                        </p>
                                        <p>
                                            <span><i className="fa fa-check" style={{marginRight:'2px'}}></i></span>
                                            ĐKKD số: 0106790291. Sở KHĐT Hà Nội cấp ngày 16/03/2015
                                        </p>
                                        <div>
                                            <a href="#">
                                                <img src="https://bookingcare.vn/assets/icon/bo-cong-thuong.svg" width={200} alt="" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-3 footer-col2'>
                                    <ul>
                                        <li>
                                            <a href="#"><i className="fa fa-angle-double-right"></i> Liên hệ hợp tác</a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fa fa-angle-double-right"></i> Sức khỏe doanh nghiệp</a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fa fa-angle-double-right"></i> Gói chuyển đổi số doanh nghiệp</a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fa fa-angle-double-right"></i> Tuyển dụng</a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fa fa-angle-double-right"></i> Câu hỏi thường gặp</a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fa fa-angle-double-right"></i> Điều khoản sử dụng</a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fa fa-angle-double-right"></i> Chính sách bảo mật</a> 
                                        </li>
                                        <li>
                                            <a href="#"><i className="fa fa-angle-double-right"></i> Quy trình hỗ trợ giải quyết khiếu nại</a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fa fa-angle-double-right"></i> Quy chế hoạt động</a> 
                                        </li>
                                    </ul>
                                </div>
                                <div className='col-md-3'>
                                    <div><strong>Trụ sở tại Hà Nội</strong><br/> Lô B4/D21, Khu đô thị mới Cầu Giấy, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Thành phố Hà Nội, Việt Nam</div>
                                    <br/>
                                    <div><strong>Văn phòng tại TP Hồ Chí Minh</strong> <br/> Số 01, Hồ Bá Kiện, Phường 15, Quận 10</div>
                                    <br/>
                                    <div><strong>Hỗ trợ khách hàng</strong><br/> support@bookingcare.vn (7h - 18h)</div>
                                </div>
                    </div>
                    <div className='row'>
                        <hr/>
                        <div className='col-md-12 app-download'>
                            <i className="fa fa-download"></i>
                            Tải ứng dụng BookingCare cho điện thoại hoặc máy tính bảng: 
                            <a href="#"> Android</a>
                            <a href="#"> - iPhone/iPad</a>
                            <a href="#"> - Khác</a>
                        </div>
                    </div>
                </div>
           </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
