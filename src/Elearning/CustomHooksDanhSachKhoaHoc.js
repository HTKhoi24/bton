import React from 'react';
import useFetchCoursesList from '../Hooks/useFetchCoursesList'

const CustomHooksDanhSachKhoaHoc = () => {
    const {danhSachKhoaHoc, currentPage, totalCount, onChangePage} = useFetchCoursesList();
    return <div>Render</div>;
};

export default CustomHooksDanhSachKhoaHoc;
