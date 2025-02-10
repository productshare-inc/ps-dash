const PricingCode = `\"use client\"

import React, { useState } from \"react\"
import { AnimatePresence, motion } from \"framer-motion\"
import {
CheckIcon,
ChevronDownIcon,
InfoIcon,
StarIcon,
XIcon,
} from \"lucide-react\"

import { Switch } from \"./ui/switch\"

const PricingPage = ({ pricingPlans }) => {
const [isYearly, setIsYearly] = useState(false)
const [expandedFeatures, setExpandedFeatures] = useState(false)

return (
  <div className=\"min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-black dark:to-gray-800 py-16 px-4 sm:px-6 lg:px-8 border rounded-lg mt-10\">
    <div className=\"max-w-7xl mx-auto\">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className=\"text-5xl font-extrabold text-center mb-4 text-gray-900 dark:text-white\"
      >
        Choose Your Perfect Plan
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className=\"text-xl text-center mb-12 text-gray-600 dark:text-gray-300\"
      >
        Unlock the full potential of your projects with our flexible pricing
        options
      </motion.p>

      <div className=\"flex justify-center items-center mb-12\">
        <span
          className={\`mr-3 \${
            isYearly ? \"text-gray-500 dark:text-gray-400\" : \"font-semibold\"
          }\`}
        >
          Monthly
        </span>
        <Switch checked={isYearly} onChange={() => setIsYearly(!isYearly)} />
        <span
          className={\`ml-3 \${
            isYearly ? \"font-semibold\" : \"text-gray-500 dark:text-gray-400\"
          }\`}
        >
          Yearly{\" \"}
          <span className=\"ml-2 text-xs font-semibold bg-green-100 dark:bg-green-700 text-green-800 dark:text-green-300 px-2 py-1 rounded-full\">
            Save 20%
          </span>
        </span>
      </div>

      <div className=\"grid grid-cols-1 md:grid-cols-3 gap-8\">
        {pricingPlans.map((plan, index) => (
          <PricingCard
            key={plan.name}
            plan={plan}
            isYearly={isYearly}
            index={index}
          />
        ))}
      </div>

      <div className=\"mt-16 flex justify-center\">
        <button
          onClick={() => setExpandedFeatures(!expandedFeatures)}
          className=\"flex items-center px-6 py-3 border border-transparent shadow-lg rounded-full text-lg font-medium text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 ease-in-out transform hover:scale-105\"
        >
          {expandedFeatures ? \"Hide\" : \"Compare\"} all features
          <ChevronDownIcon
            className={\`ml-2 h-5 w-5 transition-transform duration-200 \${
              expandedFeatures ? \"rotate-180\" : \"\"
            }\`}
          />
        </button>
      </div>

      <AnimatePresence>
        {expandedFeatures && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: \"auto\" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <FeaturesTable plans={pricingPlans} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </div>
)
}

function PricingCard({ plan, isYearly, index }) {
const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice

return (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className={\`relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden \${plan.shadowColor} transition-all duration-300 hover:shadow-xl\`}
  >
    <div className=\"p-6 sm:p-8\">
      {plan.popular && (
        <StarIcon className=\"absolute top-4 right-4 h-6 w-6 text-yellow-400\" />
      )}

      <h2 className=\"text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2\">
        {plan.name}
      </h2>
      <div className=\"mb-6\">
        <span className=\"text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white\">
          {price}
        </span>
        <span className=\"text-lg font-normal text-gray-500 dark:text-gray-400\">
          /{isYearly ? \"year\" : \"month\"}
        </span>
      </div>
      <button
        className={\`w-full py-3 mt-5 px-6 mb-10 rounded-full text-white font-semibold text-lg transition-all duration-200 
        \${
          plan.color
        } \${
          plan.hoverColor
        } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-\${plan.color.split(\"-\")[1]}-500 transform hover:scale-105\`}
      >
        Get Started with {plan.name}
      </button>
      <ul className=\"space-y-3\">
        {plan.features.map((feature, idx) => (
          <li key={idx} className=\"flex items-start\">
            <CheckIcon className=\"h-5 w-5 text-white bg-green-500 rounded-full p-1 mr-3\" />
            <span className=\"text-sm text-gray-700 dark:text-gray-300\">
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
)
}

function FeaturesTable({ plans }) {
const allFeatures = Array.from(
  new Set(plans.flatMap((plan) => plan.features))
)

return (
  <div className=\"mt-12 overflow-x-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl\">
    <table className=\"w-full border-collapse\">
      <thead>
        <tr className=\"bg-gray-100 dark:bg-gray-700\">
          <th className=\"w-1/4 p-4 text-left font-semibold text-gray-900 dark:text-white\">
            Feature
          </th>
          {plans.map((plan) => (
            <th
              key={plan.name}
              className=\"w-1/4 p-4 text-center font-semibold text-gray-900 dark:text-white\"
            >
              {plan.name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {allFeatures.map((feature, idx) => (
          <tr key={idx} className=\"bg-white dark:bg-gray-800\">
            <td className=\"p-4 text-gray-700 dark:text-gray-300\">
              {feature}
            </td>
            {plans.map((plan) => (
              <td key={\`\${plan.name}-\${feature}\`} className=\"p-4 text-center\">
                {plan.features.includes(feature) ? (
                  <div className=\"inline-flex justify-center\">
                    <CheckIcon className=\"h-6 w-6 text-white bg-green-500 rounded-full p-1\" />
                  </div>
                ) : (
                  <div className=\"inline-flex justify-center\">
                    <XIcon className=\"h-6 w-6 text-gray-400 dark:text-gray-500\" />
                  </div>
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)
}

export default PricingPage
`

export default PricingCode;