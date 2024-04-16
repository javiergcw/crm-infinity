import Link from 'next/link';
import Image from 'next/image';
import { ImagesPath } from '../utils/images_path';
import CustomContainer from './container/custom_container';
import UserProfile from './container/user_container';

const Navbar = () => {
    return (
        <nav className="bg-white text-gray-700 border-t-2 border-b-2 py-2 border-ui-gray-line md:h-16 w-full">
            <div className="mx-2 md:mx-4 flex flex-col md:flex-row items-center justify-between">
                <div className='flex flex-row items-center'>
                    <NavIconLink
                        src={ImagesPath.house}
                        alt="house icon"
                        href="/"
                        text="CRM"
                    />
                    <NavLink text="Home" href="/" />
                </div>
                <div className="flex flex-wrap items-center mt-2 md:mt-0">
                    <ContainerStandard
                        src={ImagesPath.people}
                        alt="people icon"
                        text="Consolidado"
                        count={3}
                        paddingX="px-2 md:px-3 cursor-pointer hover:bg-ui-blue-200"
                        paddingY="py-1 md:py-2"
                    />
                    <ContainerStandard
                        src={ImagesPath.bell}
                        alt="bell icon"
                        paddingX="px-2 md:px-3 cursor-pointer hover:bg-ui-blue-200"
                        paddingY="py-1 md:py-2"
                        notificationCount="1"
                    />
                    <UserProfile
                        name="Carlota Marquez"
                        role="Administrador"
                        imageUrl="https://s3-alpha-sig.figma.com/img/0c98/7cc4/225c531e267e66350b17c72afe334872?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H9YZB8PsbW7SjtlJj0wIsKKVWZpRwtq-UqWQaivrMsTyRP-BP4uYUwjg4ffj4If9KuEzad9bqnUMEGlhsWET7QMjk8LW5udbGRoxkpPTIDIrOxvj3oI3DnjKYXaglkmNdBjbzpCN-RlQ7C4hG0nkoIIqGN4MP5ZjfXS92TgFQuS5q9d2k8rrssuxstTa1MTLZYoyA7M6Gg1B1ptOfTIlz~Sw-p8ubTBgk~TsZxh~Fe5477dqP8OfY-3SYYHCJhl90nKDUn898rHiUtAoMGI8v3YQVz6rctWP1RolXmfpw5ohrN-6kgwl67~08p1C9GsK9~B1An1O5eaDlSrC5F~zeQ__"
                    />
                </div>
            </div>
        </nav>
    );
};

const NavIconLink = ({ src, alt, href, text }) => (
    <>
        <div className="flex items-center bg-ui-blue-200 rounded-lg p-2 md:p-3">
            <ImageContainer src={src} alt={alt} />
        </div>
        <Link href={href} className="h3-medium-blue ml-2 md:ml-3">{text}</Link>
    </>
);

const NavLink = ({ text, href }) => (
    <Link href={href} className="medium-normal-gray ml-4 md:ml-5">{text}</Link>
);

const ImageContainer = ({ src, alt }) => (
    <div className="rounded-lg">
        <Image src={src} alt={alt} width={20} height={20} className="w-full h-full" />
    </div>
);

const ContainerStandard = ({ src, alt, text, count, paddingX, paddingY, notificationCount }) => (
    <div className="flex items-center justify-center mr-2 md:mr-3">
        <CustomContainer paddingX={paddingX} paddingY={paddingY} notificationCount={notificationCount}>
            <ImageContainer src={src} alt={alt} />
            {text && <span className="medium-normal-gray mx-1 md:mx-2">{text}</span>}
            {count && (
                <div className="small-normal-white bg-ui-red-500 flex items-center justify-center h-5 w-5 rounded-full font-semibold">{count}</div>
            )}
        </CustomContainer>
    </div>
);

export default Navbar;
