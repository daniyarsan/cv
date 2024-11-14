import Image from "next/image";
import { BriefcaseBusiness, Calendar, MapPin } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="background-light900_dark200 rounded-xl">
        <div className="mt-2 flex flex-col gap-2 p-2">
          <div className="background-light800_dark300 flex flex-row gap-4 rounded-lg p-4">
            <div className="w-full">
              <div className="flex justify-between">
                <h3 className="text-h3">File exchange platform</h3>
                <span className="text-tags bg-tags inline-flex rounded-md px-2 py-1 text-xs">
                  Done
                </span>
              </div>
              <div className="text-dark500_light600 mt-1 flex flex-wrap items-center gap-x-4 gap-y-2">
                <div className="flex gap-1 ">
                  <BriefcaseBusiness className="size-4" />
                  <span className="text-xs">https://megafile.sb/</span>
                </div>
                <div className="flex gap-1 ">
                  <MapPin className="size-4" />
                  <span className="text-xs">Worldwide</span>
                </div>
                <div className="flex gap-1 ">
                  <Calendar className="size-4" />
                  <span className="text-xs">2022</span>
                </div>
              </div>
              <p className="text-dark500_light600 mt-4 text-sm">
                Platform allowing to share files securely.
              </p>
            </div>
          </div>
          <div className="background-light800_dark300 flex flex-row gap-4 rounded-lg p-4">
            <Image
              className="size-12 rounded-full"
              width={44}
              height={44}
              src="/assets/images/hcen.png"
              alt="company"
            />
            <div className="w-full">
              <div className="flex justify-between">
                <h3 className="text-h3">HCEN application form</h3>
                <span className="text-tags bg-tags inline-flex rounded-md px-2 py-1 text-xs">
                  Done
                </span>
              </div>
              <div className="text-dark500_light600 mt-1 flex flex-wrap items-center gap-x-4 gap-y-2">
                <div className="flex gap-1 ">
                  <BriefcaseBusiness className="size-4" />
                  <span className="text-xs">https://hcensolutions.com/</span>
                </div>
                <div className="flex gap-1 ">
                  <MapPin className="size-4" />
                  <span className="text-xs">USA, Florida</span>
                </div>
                <div className="flex gap-1 ">
                  <Calendar className="size-4" />
                  <span className="text-xs">2018</span>
                </div>
              </div>
              <p className="text-dark500_light600 mt-4 text-sm">
                React based application form uses main project API to accumulate
                applications.
              </p>
            </div>
          </div>

          <div className="background-light800_dark300 flex flex-row gap-4 rounded-lg p-4">
            <Image
              className="size-12 rounded-full"
              width={44}
              height={44}
              src="/assets/images/lane.png"
              alt="company"
            />
            <div className="w-full">
              <div className="flex justify-between">
                <h3 className="text-h3">Lane Jordan</h3>
                <span className="text-tags bg-tags inline-flex rounded-md px-2 py-1 text-xs">
                  Done
                </span>
              </div>
              <div className="text-dark500_light600 mt-1 flex flex-wrap items-center gap-x-4 gap-y-2">
                <div className="flex gap-1 ">
                  <BriefcaseBusiness className="size-4" />
                  <span className="text-xs">
                    https://lanejordanministries.com/
                  </span>
                </div>
                <div className="flex gap-1 ">
                  <MapPin className="size-4" />
                  <span className="text-xs">USA</span>
                </div>
                <div className="flex gap-1 ">
                  <Calendar className="size-4" />
                  <span className="text-xs">2015</span>
                </div>
              </div>
              <p className="text-dark500_light600 mt-4 text-sm">
                Wordpress web site extending details about Lane Jordan...
              </p>
            </div>
          </div>

          <div className="background-light800_dark300 flex flex-row gap-4 rounded-lg p-4">
            <Image
              className="size-12 rounded-full"
              width={44}
              height={44}
              src="/assets/images/jsc.png"
              alt="company"
            />
            <div className="w-full">
              <div className="flex justify-between">
                <h3 className="text-h3">JSC Healthcare</h3>
                <span className="text-tags bg-tags inline-flex rounded-md px-2 py-1 text-xs">
                  Done
                </span>
              </div>
              <div className="text-dark500_light600 mt-1 flex flex-wrap items-center gap-x-4 gap-y-2">
                <div className="flex gap-1 ">
                  <BriefcaseBusiness className="size-4" />
                  <span className="text-xs">https://jsc-healthcare.de</span>
                </div>
                <div className="flex gap-1 ">
                  <MapPin className="size-4" />
                  <span className="text-xs">Germany</span>
                </div>
                <div className="flex gap-1 ">
                  <Calendar className="size-4" />
                  <span className="text-xs">2014</span>
                </div>
              </div>
              <p className="text-dark500_light600 mt-4 text-sm">
                Landing Web Site based on Wordpress
              </p>
            </div>
          </div>

          <div className="background-light800_dark300 flex flex-row gap-4 rounded-lg p-4">
            <Image
              className="size-12 rounded-full"
              width={44}
              height={44}
              src="/assets/images/hcen.png"
              alt="company"
            />
            <div className="w-full">
              <div className="flex justify-between">
                <h3 className="text-h3">
                  HealthCare Traveler Network platform
                </h3>
                <span className="text-tags bg-tags inline-flex rounded-md px-2 py-1 text-xs">
                  Done
                </span>
              </div>
              <div className="text-dark500_light600 mt-1 flex flex-wrap items-center gap-x-4 gap-y-2">
                <div className="flex gap-1 ">
                  <BriefcaseBusiness className="size-4" />
                  <span className="text-xs">
                    https://healthcaretravelers.com/
                  </span>
                </div>
                <div className="flex gap-1 ">
                  <MapPin className="size-4" />
                  <span className="text-xs">USA, Florida</span>
                </div>
                <div className="flex gap-1 ">
                  <Calendar className="size-4" />
                  <span className="text-xs">2013</span>
                </div>
              </div>
              <p className="text-dark500_light600 mt-4 text-sm">
                Medical Staff application aggregator with powerful admin panel
                management. It helped more than 100 000 medical staff to find
                their dream job.
              </p>
            </div>
          </div>

          <div className="background-light800_dark300 flex flex-row gap-4 rounded-lg p-4">
            <Image
              className="size-12 rounded-full"
              width={44}
              height={44}
              src="/assets/images/eurojobs.png"
              alt="company"
            />
            <div className="w-full">
              <div className="flex justify-between">
                <h3 className="text-h3">Eurojobs</h3>
                <span className="text-tags bg-tags inline-flex rounded-md px-2 py-1 text-xs">
                  Done
                </span>
              </div>
              <div className="text-dark500_light600 mt-1 flex flex-wrap items-center gap-x-4 gap-y-2">
                <div className="flex gap-1 ">
                  <BriefcaseBusiness className="size-4" />
                  <span className="text-xs">https://eurojobs.com/</span>
                </div>
                <div className="flex gap-1 ">
                  <MapPin className="size-4" />
                  <span className="text-xs">UK, London</span>
                </div>
                <div className="flex gap-1 ">
                  <Calendar className="size-4" />
                  <span className="text-xs">2013</span>
                </div>
              </div>
              <p className="text-dark500_light600 mt-4 text-sm">
                Platform allows to find jobs in Europe. Millions of vacancies in
                countries such as Germany, United Kingdom, France, Netherlands,
                etc. Job search, recruiters management system
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
