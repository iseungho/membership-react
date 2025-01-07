import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import React, {useCallback, useState} from "react";
import useCustomLogin from "../../hooks/useCustomLogin";
import LoginModal from "../member/LoginModal"; // useCustomLogin 훅을 가져옵니다.

const BasicMenu = ({ children }) => {
    const navigate = useNavigate();
    const loginState = useSelector(state => state.loginSlice);
    const { doLogout, moveToPath } = useCustomLogin(); // doLogout, moveToPath를 가져옵니다.

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleClickLogo = useCallback(() => {
        navigate({ pathname: `/` });
    }, [navigate]);

    const handleLogout = useCallback(() => {
        doLogout(); // 로그아웃 처리
        alert("정상적으로 로그아웃되었습니다!");
        moveToPath("/"); // 홈으로 리다이렉션
    }, [doLogout, moveToPath]);

    return (
        <div>
            <nav id='navbar' className="fixed w-full top-0 left-0 z-50 bg-gray-100 shadow">
                <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                    <nav className="space-x-1">
                        <button
                            className="bg-logo-image bg-cover w-12 h-12 font-bold text-blue-500"
                            onClick={handleClickLogo}
                        ></button>
                    </nav>
                    <nav className="space-x-4 flex items-center">
                        <div className="flex space-x-4">
                            <button className="px-3 py-2">분실물 게시판
                            </button>
                            <button className="px-3 py-2">습득물 게시판
                            </button>
                            <button className="px-3 py-2">자유게시판
                            </button>
                        </div>
                        {!loginState.email ? (
                            <>
                                <Link to={'/member/signup'}
                                      className="bg-blue-400 text-white px-6 py-3 rounded-lg hover:bg-blue-500 w-32 h-12 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow text-lg">
                                    SignUp
                                </Link>
                                <button className="bg-green-400 text-white px-6 py-3 rounded-lg hover:bg-green-500 w-32 h-12 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow text-lg"
                                        onClick={openModal}>
                                    Login
                                </button>
                                <LoginModal isOpen={isModalOpen} onClose={closeModal} />
                            </>
                        ) : (
                            <>
                                <Link to={'/member/modify'} className="bg-blue-400 text-white px-6 py-3 rounded-lg hover:bg-blue-500 w-32 h-12 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow text-lg">
                                    Modify
                                </Link>
                                <button
                                    className="bg-green-400 text-white px-6 py-3 rounded-lg hover:bg-green-500 w-32 h-12 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow text-lg"
                                    onClick={handleLogout} // 로그아웃 버튼 클릭 시 handleLogout 호출
                                >
                                    Logout
                                </button>
                            </>
                        )}
                    </nav>
                </div>
            </nav>
            {children}
        </div>
    );
}

export default BasicMenu;