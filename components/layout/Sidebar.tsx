import Image from "next/image";
import { skills } from "@/contants/data";
import Tag from "@/components/shared/Tag";
import { Button } from "@/components/ui/button";
import { Mail, SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="flex flex-col gap-5">
      <div className="background-light900_dark200 flex flex-col overflow-hidden rounded-xl">
        <div className="relative">
          <Image
            width={220}
            height={113}
            src="/assets/images/cover.png"
            alt="image"
            className="w-full object-cover object-center"
          />
          <div className="absolute top-0 z-10 size-full bg-gradient-to-t from-white to-transparent p-4">
            <Image
              width={76}
              height={76}
              src="/assets/images/photo.jpg"
              alt="image"
              className="absolute bottom-0 rounded-full border-2 border-white object-cover object-center"
            />
          </div>
        </div>

        <div className="mt-2 flex flex-col gap-4 p-2">
          <div className="px-4">
            <h2 className="text-h2 flex flex-row gap-2">
              Daniyar Akylbekov
              <div className="flex size-4 animate-pulse items-center justify-center rounded-full bg-green-200 opacity-20">
                <div className="size-1.5 rounded-full bg-green-600"></div>
              </div>
            </h2>

            <div className="mt-2 flex items-center gap-3">
              <p>Full Stack Developer</p>
              <svg
                viewBox="0 0 2 2"
                width="3"
                height="3"
                aria-hidden="true"
                className="lb"
              >
                <circle cx="1" cy="1" r="1"></circle>
              </svg>
              <p>Remote</p>
            </div>
          </div>

          <div className="background-light800_dark300 flex flex-col gap-6 rounded-xl p-4">
            <p className="text-dark500_light700">
              Full-stack developer with 8+ years of experience in building web
              apps. Skilled in React, Next.js, Node.js, PHP (Laravel), Python,
              and SQL.
            </p>

            <div className="flex-start flex-wrap gap-1.5">
              {skills.map((skill, index) => {
                return <Tag key={index} text={skill} />;
              })}
            </div>

            <Link href="/cv.pdf">
              <Button className="min-h-[46px] bg-blue-700 px-3 py-4 !text-light-900">
                Download CV
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M13 10h5l-6 6l-6-6h5V3h2zm-9 9h16v-7h2v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8h2z"
                  ></path>
                </svg>
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="background-light900_dark200 rounded-xl">
        <div className="mt-2 flex flex-col gap-4 p-2">
          <h2 className="text-h2 flex flex-row items-center gap-4 px-4 py-2 marker:text-indigo-900">
            <div className="before:block before:size-2 before:rounded-full before:bg-blue-700 before:content-['']"></div>
            About me
          </h2>

          <div className="background-light800_dark300 flex flex-col gap-6 rounded-xl p-4">
            <p className="text-dark500_light700">
              I am passionate about using technology to solve real-world
              problems. I am always looking for new ways to improve the user
              experience and make software more accessible to everyone.
            </p>

            <hr />
            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <Mail className="size-4" />
                daniyar.san@gmail.com
              </div>
              <Link className="flex gap-2" href="https://github.com/daniyarsan">
                <SquareArrowOutUpRight className="size-4" />
                github.com
              </Link>

              <Link
                className="flex gap-2"
                href="https://www.linkedin.com/in/daniyar-akylbekov-9602196b/"
              >
                <SquareArrowOutUpRight className="size-4" />
                LinkedIn
              </Link>

              <Link
                className="flex gap-2"
                href="https://www.upwork.com/freelancers/daniyar"
              >
                <SquareArrowOutUpRight className="size-4" />
                Upwork
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
