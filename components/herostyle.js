import Link from "next/link";
import Image from 'next/image';
import next from './next.jpeg';

export default function HeroStyle(){
  return(
    <>
      <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">반갑습니다. Choco's Dev입니다.
                <br className="hidden lg:inline-block"/>NEXT TAIL
              </h1>
              <p className="mb-8 leading-relaxed">이번 프로젝트에서는 넥스트제이에스와 테일윈드를 통해서, 빠른 시간에 화면을 구성하고, 더 나아가 nextjs의 기능들을 더 살펴볼 예정입니다.</p>
              <div className="flex justify-center">
                <Link href="/project">
                  <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">프로젝트로 가기</button> 
                </Link>
                {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <Image src={next}></Image>
            </div>
          </div>
      </section>
    </>
  )
}