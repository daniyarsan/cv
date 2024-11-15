import Image from "next/image";
import {
  BriefcaseBusiness,
  Calendar,
  GraduationCap,
  MapPin,
} from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="background-light900_dark200 rounded-xl">
        <div className="mt-2 flex flex-col gap-2 p-2">
          <h2 className="text-h2 mb-5 flex flex-row items-center gap-4 px-4 py-2 marker:text-indigo-900">
            <div className="before:block before:size-2 before:rounded-full before:bg-blue-700 before:content-['']"></div>
            Experience
          </h2>

          <div className="background-light800_dark300 flex flex-row gap-4 rounded-lg p-4">
            <Image
              className="size-12 rounded-full"
              width={44}
              height={44}
              src="/assets/images/dd.png"
              alt="company"
            />
            <div className="w-full">
              <div className="flex justify-between">
                <h3 className="text-h3">Full stack developer</h3>
                <span className="text-tags bg-tags inline-flex rounded-md px-2 py-1 text-xs">
                  Full-time
                </span>
              </div>
              <div className="text-dark500_light600 mt-1 flex flex-wrap items-center gap-x-4 gap-y-2">
                <div className="flex gap-1 ">
                  <BriefcaseBusiness className="size-4" />
                  <span className="text-xs">
                    https://www.districtdata.com.au/
                  </span>
                </div>
                <div className="flex gap-1 ">
                  <MapPin className="size-4" />
                  <span className="text-xs">Kyrgizstan, Bishkek</span>
                </div>
                <div className="flex gap-1 ">
                  <Calendar className="size-4" />
                  <span className="text-xs">Jan 2022 – Aug 2022</span>
                </div>
              </div>
              <p className="text-dark500_light600 mt-4 text-sm">
                GIS system development. Frontend and Backend | (PHP, Symfony5,
                Angular/js, HTML, CSS, JS)
              </p>
            </div>
          </div>

          <div className="background-light800_dark300 flex flex-row gap-4 rounded-lg p-4">
            <Image
              className="size-12 rounded-full"
              width={44}
              height={44}
              src="/assets/images/inrento.png"
              alt="company"
            />
            <div className="w-full">
              <div className="flex justify-between">
                <h3 className="text-h3">Full stack developer</h3>
                <span className="text-tags bg-tags inline-flex rounded-md px-2 py-1 text-xs">
                  Full-time
                </span>
              </div>
              <div className="text-dark500_light600 mt-1 flex flex-wrap items-center gap-x-4 gap-y-2">
                <div className="flex gap-1 ">
                  <BriefcaseBusiness className="size-4" />
                  <span className="text-xs">https://inrento.com/</span>
                </div>
                <div className="flex gap-1 ">
                  <MapPin className="size-4" />
                  <span className="text-xs">Lithuania, Vilnius</span>
                </div>
                <div className="flex gap-1 ">
                  <Calendar className="size-4" />
                  <span className="text-xs">Jul 2021 – Dec 2021</span>
                </div>
              </div>
              <p className="text-dark500_light600 mt-4 text-sm">
                Development of Crowdfunding platforms | (Symfony 4, PHP, HTML,
                CSS, JS, Docker, git)
              </p>
            </div>
          </div>

          <div className="background-light800_dark300 flex flex-row gap-4 rounded-lg p-4">
            <Image
              className="size-12 rounded-full"
              width={44}
              height={44}
              src="/assets/images/fatweb.png"
              alt="company"
            />
            <div className="w-full">
              <div className="flex justify-between">
                <h3 className="text-h3">Web developer</h3>
                <span className="text-tags bg-tags inline-flex rounded-md px-2 py-1 text-xs">
                  Full-time
                </span>
              </div>
              <div className="text-dark500_light600 mt-1 flex flex-wrap items-center gap-x-4 gap-y-2">
                <div className="flex gap-1 ">
                  <BriefcaseBusiness className="size-4" />
                  <span className="text-xs">https://fatweb.co.nz/</span>
                </div>
                <div className="flex gap-1 ">
                  <MapPin className="size-4" />
                  <span className="text-xs">New Zealand, Auckland</span>
                </div>
                <div className="flex gap-1 ">
                  <Calendar className="size-4" />
                  <span className="text-xs">June 2023 – Nov 2023</span>
                </div>
              </div>
              <p className="text-dark500_light600 mt-4 text-sm">
                Feature Development, Tech Support | (Wordpress, PHP, HTML, CSS,
                JS, MySql, jQuery)
              </p>
            </div>
          </div>

          <div className="background-light800_dark300 flex flex-row gap-4 rounded-lg p-4">
            <Image
              className="size-12 rounded-full"
              width={44}
              height={44}
              src="/assets/images/sjb.jpeg"
              alt="company"
            />
            <div className="w-full">
              <div className="flex justify-between">
                <h3 className="text-h3">Tech support / Developer</h3>
                <span className="text-tags bg-tags inline-flex rounded-md px-2 py-1 text-xs">
                  Full-time
                </span>
              </div>
              <div className="text-dark500_light600 mt-1 flex flex-wrap items-center gap-x-4 gap-y-2">
                <div className="flex gap-1 ">
                  <BriefcaseBusiness className="size-4" />
                  <span className="text-xs">http://www.smartjobboard.com</span>
                </div>
                <div className="flex gap-1 ">
                  <MapPin className="size-4" />
                  <span className="text-xs">Kyrgizstan, Bishkek</span>
                </div>
                <div className="flex gap-1 ">
                  <Calendar className="size-4" />
                  <span className="text-xs">Feb 2012 – Nov 2014</span>
                </div>
              </div>
              <p className="text-dark500_light600 mt-4 text-sm">
                JobBoard, WebSites and feature Development, Tech Support |
                (SmartJobBoard, PHP, HTML, CSS, JS, MySql, jQuery, SVN, JIRA)
              </p>
            </div>
          </div>

          <div className="background-light800_dark300 flex flex-row gap-4 rounded-lg p-4">
            <Image
              className="size-12 rounded-full"
              width={44}
              height={44}
              src="/assets/images/hireexperts.jpeg"
              alt="company"
            />
            <div className="w-full">
              <div className="flex justify-between">
                <h3 className="text-h3">Tech support / Developer</h3>
                <span className="text-tags bg-tags inline-flex rounded-md px-2 py-1 text-xs">
                  Full-time
                </span>
              </div>
              <div className="text-dark500_light600 mt-1 flex flex-wrap items-center gap-x-4 gap-y-2">
                <div className="flex gap-1 ">
                  <BriefcaseBusiness className="size-4" />
                  <span className="text-xs">www.hire-experts.com</span>
                </div>
                <div className="flex gap-1 ">
                  <MapPin className="size-4" />
                  <span className="text-xs">Kyrgizstan, Bishkek</span>
                </div>
                <div className="flex gap-1 ">
                  <Calendar className="size-4" />
                  <span className="text-xs">Feb 2012 – Nov 2014</span>
                </div>
              </div>
              <p className="text-dark500_light600 mt-4 text-sm">
                Customer Support (Ticket system) | (Socialengine, PHP, HTML,
                CSS)
              </p>
            </div>
          </div>

          <div className="background-light800_dark300 flex flex-row gap-4 rounded-lg p-4">
            <Image
              className="size-12 rounded-full"
              width={44}
              height={44}
              src="/assets/images/nival.png"
              alt="company"
            />
            <div className="w-full">
              <div className="flex justify-between">
                <h3 className="text-h3">Quality Assurance Assistant</h3>
                <span className="text-tags bg-tags inline-flex rounded-md px-2 py-1 text-xs">
                  Full-time
                </span>
              </div>
              <div className="text-dark500_light600 mt-1 flex flex-wrap items-center gap-x-4 gap-y-2">
                <div className="flex gap-1 ">
                  <BriefcaseBusiness className="size-4" />
                  <span className="text-xs">www.allods.com</span>
                </div>
                <div className="flex gap-1 ">
                  <MapPin className="size-4" />
                  <span className="text-xs">Russia, Moscow</span>
                </div>
                <div className="flex gap-1 ">
                  <Calendar className="size-4" />
                  <span className="text-xs">2009 - 2010</span>
                </div>
              </div>
              <p className="text-dark500_light600 mt-4 text-sm">
                Testing of MMO RPG | (Collecting of bugs and writing bug reports
                through bug tracker)
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="background-light900_dark200 rounded-xl">
        <div className="mt-2 flex flex-col gap-2 p-2">
          <h2 className="text-h2 mb-5 flex flex-row items-center gap-4 px-4 py-2 marker:text-indigo-900">
            <div className="before:block before:size-2 before:rounded-full before:bg-blue-700 before:content-['']"></div>
            Education
          </h2>

          <div className="background-light800_dark300 flex flex-row gap-4 rounded-lg p-4">
            <div className=""></div>
            <div className="w-full">
              <div className="flex justify-between">
                <h3 className="text-h3">
                  International Academy of Management, Rights, Finance and
                  Business
                </h3>
              </div>
              <div className="text-dark500_light600 mt-1 flex flex-wrap items-center gap-x-4 gap-y-2">
                <div className="flex gap-1 ">
                  <GraduationCap className="size-4" />
                  <span className="text-xs">BA in Management</span>
                </div>
                <div className="flex gap-1 ">
                  <MapPin className="size-4" />
                  <span className="text-xs">Kyrgizstan, Bishkek</span>
                </div>
                <div className="flex gap-1 ">
                  <Calendar className="size-4" />
                  <span className="text-xs">2008 - 2014</span>
                </div>
              </div>
            </div>
          </div>
          <div className="background-light800_dark300 flex flex-row gap-4 rounded-lg p-4">
            <Image
              className="size-12 rounded-full"
              width={44}
              height={44}
              src="/assets/images/auca.png"
              alt="company"
            />
            <div className="w-full">
              <div className="flex justify-between">
                <h3 className="text-h3">American University – Central Asia</h3>
              </div>
              <div className="text-dark500_light600 mt-1 flex flex-wrap items-center gap-x-4 gap-y-2">
                <div className="flex gap-1 ">
                  <GraduationCap className="size-4" />
                  <span className="text-xs">BA in Sociology</span>
                </div>
                <div className="flex gap-1 ">
                  <MapPin className="size-4" />
                  <span className="text-xs">Kyrgizstan, Bishkek</span>
                </div>
                <div className="flex gap-1 ">
                  <Calendar className="size-4" />
                  <span className="text-xs">2003 - 2008</span>
                </div>
              </div>
            </div>
          </div>

          <div className="background-light800_dark300 flex flex-row gap-4 rounded-lg p-4">
            <Image
              className="size-12 rounded-full"
              width={44}
              height={44}
              src="/assets/images/jacobs.png"
              alt="company"
            />
            <div className="w-full">
              <div className="flex justify-between">
                <h3 className="text-h3">
                  Educational and Consultancy Business center “Jacobs Training”
                </h3>
              </div>
              <div className="text-dark500_light600 mt-1 flex flex-wrap items-center gap-x-4 gap-y-2">
                <div className="flex gap-1 ">
                  <GraduationCap className="size-4" />
                  <span className="text-xs">Accountant</span>
                </div>
                <div className="flex gap-1 ">
                  <MapPin className="size-4" />
                  <span className="text-xs">Kyrgizstan, Bishkek</span>
                </div>
                <div className="flex gap-1 ">
                  <Calendar className="size-4" />
                  <span className="text-xs">Feb – May 2008</span>
                </div>
                <p>
                  Successfully passed the exam on Accountant Assistant
                  specialization (certificate with honors)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
