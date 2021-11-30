import instance from "./instance";

export const cateList = () => {
    const url = "/model";
    return instance.get(url);
}


// GET /product => Hien thi danh sach
// GET /product/:id => Chi tiet san pham
// POST /product => Them san pham
// DELETE /product/:id => Xoa san pham
// PATCH /product/:id => cap nhat san pham