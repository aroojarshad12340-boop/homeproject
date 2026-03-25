'use client';

import { motion } from 'framer-motion';

const ProcessSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-medium">
            Our Process
          </span>
          <h2 className="text-4xl font-bold mt-4 text-gray-800">
            How We Work
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto leading-relaxed">
            Our work follows a carefully planned four-step process that begins
            with understanding your ideas and ends with delivering a finished
            result that reflects modern design, comfort, and a better lifestyle.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gray-300 -translate-x-1/2"></div>

          <div className="space-y-14">
            {/* Step 1 */}
            <div className="grid grid-cols-3 items-start">
              <div className="flex justify-end pr-1">
                <div className="bg-amber-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-semibold">
                  01
                </div>
              </div>
              <div></div>
              <div className="pl-1">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Consult
                </h3>
                <p className="text-gray-500">
                  We start by understanding your needs, ideas and lifestyle
                  so that the project reflects your expectations and comfort.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid grid-cols-3 items-start">
              <div className="text-right pr-1">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Design
                </h3>
                <p className="text-gray-500">
                  Our team creates layouts and concepts that transform
                  your ideas into a modern and practical design plan.
                </p>
              </div>
              <div></div>
              <div className="flex justify-start pl-1">
                <div className="bg-amber-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-semibold">
                  02
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid grid-cols-3 items-start">
              <div className="flex justify-end pr-1">
                <div className="bg-amber-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-semibold">
                  03
                </div>
              </div>
              <div></div>
              <div className="pl-1">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Refine
                </h3>
                <p className="text-gray-500">
                  We refine the design with improvements so the final
                  concept matches your vision perfectly.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid grid-cols-3 items-start">
              <div className="text-right pr-1">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Execute
                </h3>
                <p className="text-gray-500">
                  Finally we execute the project carefully to deliver
                  a high quality finished result.
                </p>
              </div>
              <div></div>
              <div className="flex justify-start pl-1">
                <div className="bg-amber-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-semibold">
                  04
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;