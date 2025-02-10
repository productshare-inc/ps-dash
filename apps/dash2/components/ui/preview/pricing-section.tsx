"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckIcon, XIcon, ChevronDownIcon, InfoIcon } from "lucide-react";

const features = [
  {
    name: "Unlimited projects",
    description: "Create and manage as many projects as you need",
  },
  {
    name: "Unlimited storage",
    description: "Store all your files without worrying about space",
  },
  {
    name: "Custom domain",
    description: "Use your own domain name for your projects",
  },
  { name: "24/7 support", description: "Get help anytime you need it" },
  {
    name: "Analytics dashboard",
    description: "Track your project performance with detailed analytics",
  },
  {
    name: "Team collaboration",
    description: "Work together with your team members effortlessly",
  },
  {
    name: "API access",
    description: "Integrate our services with your own applications",
  },
  {
    name: "Automated backups",
    description: "Keep your data safe with regular automated backups",
  },
  {
    name: "Custom branding",
    description: "Apply your own branding to all aspects of your projects",
  },
  {
    name: "Priority support",
    description: "Get faster response times and dedicated support",
  },
];

const plans = [
  {
    name: "Starter",
    monthlyPrice: 19,
    yearlyPrice: 190,
    features: features.slice(0, 3),
    color: "bg-blue-500",
    hoverColor: "hover:bg-blue-600",
    shadowColor: "shadow-blue-200",
    popular: true,
  },
  {
    name: "Pro",
    monthlyPrice: 49,
    yearlyPrice: 490,
    features: features.slice(0, 7),
    color: "bg-purple-500",
    hoverColor: "hover:bg-purple-600",
    shadowColor: "shadow-purple-200",
    popular: true,
  },
];

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);
  const [expandedFeatures, setExpandedFeatures] = useState(false);

  return (
    <div className="px-8 py-3">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold text-center mb-4 text-gray-900 dark:text-white"
        >
          Choose Your Perfect Plan
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-center mb-12 text-gray-600 dark:text-gray-300"
        >
          Unlock the full potential of your projects with our flexible pricing
          options
        </motion.p>

        <div className="flex justify-center items-center mb-12">
          <span
            className={`mr-3 ${isYearly ? "text-gray-500 dark:text-gray-400" : "font-semibold"}`}
          >
            Monthly
          </span>
          <Switch checked={isYearly} onChange={() => setIsYearly(!isYearly)} />
          <span
            className={`ml-3 ${isYearly ? "font-semibold" : "text-gray-500 dark:text-gray-400"}`}
          >
            Yearly{" "}
            <span className="ml-2 text-xs font-semibold bg-green-100 dark:bg-green-700 text-green-800 dark:text-green-300 px-2 py-1 rounded-full">
              Save 20%
            </span>
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {plans.map((plan, index) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              isYearly={isYearly}
              index={index}
            />
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <button
            onClick={() => setExpandedFeatures(!expandedFeatures)}
            className="flex items-center px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-full text-lg font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 ease-in-out transform hover:scale-105"
          >
            {expandedFeatures ? "Hide" : "Compare"} all features
            <ChevronDownIcon
              className={`ml-2 h-5 w-5 transition-transform duration-200 ${
                expandedFeatures ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        <AnimatePresence>
          {expandedFeatures && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <FeaturesTable plans={plans} features={features} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}


{/* @ts-ignore */}
function PricingCard({ plan, isYearly, index }) {
  const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden ${plan.shadowColor} transition-all duration-300 border `}
    >
      <div className="p-6 sm:p-8">
        {plan.popular && (
          <span className="absolute top-4 right-4 bg-indigo-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
            Most Popular
          </span>
        )}
        
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h2>
        
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
          Perfect for {plan.name.toLowerCase()} users
        </p>
        
        <div className="mb-6">
          <span className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">${price}</span>
          <span className="text-lg font-normal text-gray-500 dark:text-gray-400">
            /{isYearly ? "year" : "month"}
          </span>
        </div>
        
        <button
          className={`w-full py-3 px-6 mb-6 rounded-xl text-white font-semibold text-base sm:text-lg transition-all duration-200 ${plan.color} ${plan.hoverColor} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${plan.color.split("-")[1]}-500 transform hover:scale-105`}
        >
          Get Started with {plan.name}
        </button>
        
        <ul className="space-y-3">
            {/* @ts-ignore */}
          {plan.features.map((feature) => (
            <li key={feature.name} className="flex items-start">
              <CheckIcon
                className={`h-5 w-5 ${plan.color} text-white rounded-full p-1 mr-3 flex-shrink-0`}
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">{feature.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
{/* @ts-ignore */}
function FeaturesTable({ plans, features }) {
  return (
    <div className="mt-12 overflow-x-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-700">
            <th className="p-4 text-left font-semibold text-gray-900 dark:text-white">
              Feature
            </th>
            {/* @ts-ignore */}
            {plans.map((plan) => (
              <th
                key={plan.name}
                className="p-4 text-center font-semibold text-gray-900 dark:text-white"
              >
                {plan.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
            {/* @ts-ignore */}
          {features.map((feature, index) => (
            <motion.tr
              key={feature.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.05 }}
              className={index % 2 === 0 ? "bg-white dark:bg-gray-800" : "bg-gray-50 dark:bg-gray-700"}
            >
              <td className="p-4 border-t border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300">
                <div className="flex items-center">
                  {feature.name}
                  <Tooltip content={feature.description}>
                    <InfoIcon className="h-4 w-4 ml-2 text-gray-400 dark:text-gray-500 cursor-help" />
                  </Tooltip>
                </div>
              </td>
              {/* @ts-ignore */}
              {plans.map((plan) => (
                <td
                  key={`${plan.name}-${feature.name}`}
                  className="p-4 text-center border-t border-gray-200 dark:border-gray-600"
                >
                    {/* @ts-ignore */}
                  {plan.features.some((f) => f.name === feature.name) ? (
                    <CheckIcon
                      className={`h-6 w-6 mx-auto ${plan.color} text-white rounded-full p-1`}
                    />
                  ) : (
                    <XIcon className="h-6 w-6 mx-auto text-gray-300 dark:text-gray-500" />
                  )}
                </td>
              ))}
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// @ts-ignore
function Switch({ checked, onChange }) {
  return (
    <button
      className={`relative inline-flex items-center h-7 rounded-full w-14 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200 ease-in-out ${
        checked ? "bg-indigo-600" : "bg-gray-200 dark:bg-gray-700"
      }`}
      onClick={onChange}
    >
      <span className="sr-only">Toggle yearly billing</span>
      <span
        className={`${
          checked ? "translate-x-8" : "translate-x-1"
        } inline-block w-5 h-5 transform bg-white rounded-full transition-transform duration-200 ease-in-out shadow-md`}
      />
    </button>
  );
}

// @ts-ignore
function Tooltip({ content, children }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </div>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-10 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm tooltip dark:bg-gray-700"
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
