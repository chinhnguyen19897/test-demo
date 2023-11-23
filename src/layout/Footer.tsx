import {Footer} from "flowbite-react";

function FooterLayout() {
    return (
        <Footer container className="px-20 relative">
            <Footer.Copyright href="#" by="Bản quyền © 2021 thuộc về Ngân hàng TMCP Hàng Hải Việt Nam MSB" year={2021}/>
            <Footer.LinkGroup>
                <Footer.Link href="#">Điều khoản dịch vụ</Footer.Link>
                <Footer.Link href="#">Ngân hàng điện tử</Footer.Link>
            </Footer.LinkGroup>
        </Footer>
    );
}

export default FooterLayout;
