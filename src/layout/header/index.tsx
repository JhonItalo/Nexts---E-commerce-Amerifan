import * as S from "./styles";
import Search from "../../components/search";
import Cart from "../../components/cart";
import Logo from "../../components/logo";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import AccessibleButtonName from "../../components/acessibleButtonName";
import { useRouter } from "next/router";
import Account from "../../components/account";

const Header = () => {
     console.log("header render");
     const { asPath: pathname } = useRouter();
     return (
          <>
               {pathname != "/login" && pathname != "/register" && (
                    <S.Header>
                         <S.InitialPromotionSpan>
                              <p className="developer">Developer by John Ítalo Lima Lima</p>
                              <div>
                                   <a href="https://www.linkedin.com/in/johnitalodev/" target="_blank" rel="noreferrer">
                                        <AiFillLinkedin />
                                        <AccessibleButtonName name="linkedin" />
                                   </a>
                                   <a href="https://github.com/JhonItalo" target="_blank" rel="noreferrer">
                                        <AiFillGithub />

                                        <AccessibleButtonName name="github" />
                                   </a>
                              </div>
                         </S.InitialPromotionSpan>
                         <S.Content>
                              <S.MainContent>
                                   <Logo />
                                   <Search />
                                   <Account />
                                   <Cart />
                              </S.MainContent>
                         </S.Content>
                    </S.Header>
               )}
          </>
     );
};

export default Header;
