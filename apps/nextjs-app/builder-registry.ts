'use client';
import type { RegisteredComponent } from '@builder.io/sdk-react';
import Counter from './components/Counter/Counter';
import Hero from '@repo/ui/organisms/custom/landing/v1/Hero';
import {HeroSection} from '@repo/ui/organisms/shadcn/hero-with-section';
import {HeroGeometric} from '@repo/ui/organisms/shadcn/shape-landing-hero';
import { BackgroundPaths } from '@repo/ui/organisms/shadcn/background-paths';
export const CUSTOM_COMPONENTS: RegisteredComponent[] = [
  {component: BackgroundPaths,
    name: 'BackgroundPaths',
    inputs: [
      {
        name: 'title',
        type: 'string',
        defaultValue: 'Background Paths',
      },
    ],
  },
  { component: HeroGeometric,
    name: 'HeroGeometric',
    inputs: [
      {
        name: 'badge',
        type: 'string',
        defaultValue: 'Design Collective',
      },
      {
        name: 'title1',
        type: 'string',
        defaultValue: 'Elevate Your Digital Vision',
      },
      {
        name: 'title2',
        type: 'string',
        defaultValue: 'Crafting Exceptional Websites',
      },
    ],
  },
  { component: HeroSection,
    name: 'HeroSection',
    inputs: [
      {
        name: 'title',
        type: 'string',
        defaultValue: 'Welcome to Our Platform',
      },
      {
        name: 'subtitle',
        type: 'object',
        subFields: [
          { name: 'regular', type: 'string', defaultValue: 'Transform your ideas into ' },
          { name: 'gradient', type: 'string', defaultValue: 'beautiful digital experiences' },
        ],
        defaultValue: {
          regular: 'Transform your ideas into ',
          gradient: 'beautiful digital experiences',
        },
      },
      {
        name: 'description',
        type: 'string',
        defaultValue: 'Transform your ideas into reality with our comprehensive suite of development tools and resources.',
      },
      {
        name: 'ctaText',
        type: 'string',
        defaultValue: 'Get Started',
      },
      {
        name: 'ctaHref',
        type: 'string',
        defaultValue: '/signup',
      },
      {
        name: 'bottomImage',
        type: 'object',
        subFields: [
          { name: 'light', type: 'string', defaultValue: 'https://www.launchuicomponents.com/app-light.png' },
          { name: 'dark', type: 'string', defaultValue: 'https://www.launchuicomponents.com/app-dark.png' },
        ],
        defaultValue: {
          light: 'https://www.launchuicomponents.com/app-light.png',
          dark: 'https://www.launchuicomponents.com/app-dark.png',
        },
      },
      {
        name: 'gridOptions',
        type: 'object',
        subFields: [
          { name: 'angle', type: 'number', defaultValue: 65 },
          { name: 'cellSize', type: 'number', defaultValue: 50 },
          { name: 'opacity', type: 'number', defaultValue: 0.4 },
          { name: 'lightLineColor', type: 'string', defaultValue: '#4a4a4a' },
          { name: 'darkLineColor', type: 'string', defaultValue: '#2a2a2a' },
        ],
        defaultValue: {
          angle: 65,
          cellSize: 50,
          opacity: 0.4,
          lightLineColor: '#4a4a4a',
          darkLineColor: '#2a2a2a',
        },
      },
    ],
  }
  ,
  {
    component: Hero,
    name: 'Hero',
    inputs: [
      {
        name: 'loginFunction',
        type: 'function',
        required: true,
        defaultValue: () => alert('Login function not implemented'),
      },
      {
        name: 'documentationLink',
        type: 'url',
        required: true,
        defaultValue: 'https://example.com/documentation',
      },
      {
        name: 'tagline',
        type: 'string',
        required: true,
        defaultValue: 'Your Tagline Here',
      },
      {
        name: 'description',
        type: 'string',
        required: true,
        defaultValue: 'Your description here.',
      },
      {
        name: 'testimonials',
        type: 'list',
        subFields: [
          { name: 'image', type: 'string', defaultValue: 'https://example.com/image.jpg' },
          { name: 'name', type: 'string', defaultValue: 'John Doe' },
          { name: 'userName', type: 'string', defaultValue: 'johndoe' },
          { name: 'comment', type: 'string', defaultValue: 'Great product!' },
        ],
        defaultValue: [
          { image: 'https://example.com/image.jpg', name: 'John Doe', userName: 'johndoe', comment: 'Great product!' },
          { image: 'https://example.com/image2.jpg', name: 'Jane Smith', userName: 'janesmith', comment: 'Amazing service!' },
        ],
      },
      {
        name: 'pricingList',
        type: 'list',
        subFields: [
          { name: 'title', type: 'string', defaultValue: 'Basic' },
          { name: 'popular', type: 'number', defaultValue: 0 },
          { name: 'price', type: 'string', defaultValue: '$10/month' },
          { name: 'priceType', type: 'string', defaultValue: 'monthly' },
          { name: 'unregisteredHref', type: 'string', defaultValue: 'https://example.com/unregistered' },
          { name: 'registeredHref', type: 'string', defaultValue: 'https://example.com/registered' },
          { name: 'description', type: 'string', defaultValue: 'Basic plan description' },
          { name: 'unregisteredButtonText', type: 'string', defaultValue: 'Sign Up' },
          { name: 'registeredButtonText', type: 'string', defaultValue: 'Upgrade' },
          { name: 'benefitList', type: 'list', defaultValue: ['Benefit 1', 'Benefit 2'] },
        ],
        defaultValue: [
          {
            title: 'Basic',
            popular: 0,
            price: '$10/month',
            priceType: 'monthly',
            unregisteredHref: 'https://example.com/unregistered',
            registeredHref: 'https://example.com/registered',
            description: 'Basic plan description',
            unregisteredButtonText: 'Sign Up',
            registeredButtonText: 'Upgrade',
            benefitList: ['Benefit 1', 'Benefit 2'],
          },
          {
            title: 'Pro',
            popular: 1,
            price: '$20/month',
            priceType: 'monthly',
            unregisteredHref: 'https://example.com/unregistered',
            registeredHref: 'https://example.com/registered',
            description: 'Pro plan description',
            unregisteredButtonText: 'Sign Up',
            registeredButtonText: 'Upgrade',
            benefitList: ['Benefit 1', 'Benefit 2', 'Benefit 3'],
          },
        ],
      },
      {
        name: 'teamList',
        type: 'list',
        subFields: [
          { name: 'imageUrl', type: 'string', defaultValue: 'https://example.com/image.jpg' },
          { name: 'name', type: 'string', defaultValue: 'Alice' },
          { name: 'position', type: 'string', defaultValue: 'Developer' },
          { name: 'description', type: 'string', defaultValue: 'Team member description' },
          {
            name: 'socialNetworks',
            type: 'list',
            subFields: [
              { name: 'name', type: 'string', defaultValue: 'LinkedIn' },
              { name: 'url', type: 'string', defaultValue: 'https://linkedin.com/in/alice' },
            ],
            defaultValue: [
              { name: 'LinkedIn', url: 'https://linkedin.com/in/alice' },
              { name: 'Twitter', url: 'https://twitter.com/alice' },
            ],
          },
        ],
        defaultValue: [
          {
            imageUrl: 'https://example.com/image.jpg',
            name: 'Alice',
            position: 'Developer',
            description: 'Team member description',
            socialNetworks: [
              { name: 'LinkedIn', url: 'https://linkedin.com/in/alice' },
              { name: 'Twitter', url: 'https://twitter.com/alice' },
            ],
          },
          {
            imageUrl: 'https://example.com/image2.jpg',
            name: 'Bob',
            position: 'Designer',
            description: 'Team member description',
            socialNetworks: [
              { name: 'LinkedIn', url: 'https://linkedin.com/in/bob' },
              { name: 'Twitter', url: 'https://twitter.com/bob' },
            ],
          },
        ],
      },
      {
        name: 'featuresWithDescription',
        type: 'list',
        subFields: [
          { name: 'title', type: 'string', defaultValue: 'Feature 1' },
          { name: 'href', type: 'string', defaultValue: 'https://example.com/feature1' },
          { name: 'description', type: 'string', defaultValue: 'Description of feature 1' },
        ],
        defaultValue: [
          { title: 'Feature 1', href: 'https://example.com/feature1', description: 'Description of feature 1' },
          { title: 'Feature 2', href: 'https://example.com/feature2', description: 'Description of feature 2' },
        ],
      },
    ],
  },
  {
    component: Counter,
    name: 'Counter',
    inputs: [
      {
        name: 'initialCount',
        type: 'number',
      },
    ],
  },
 
];