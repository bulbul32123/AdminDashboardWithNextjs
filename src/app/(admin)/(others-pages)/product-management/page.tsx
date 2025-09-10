import Image from "next/image";
import Link from "next/link";

export default function ProductManagement() {
  return (
    <div>
      <div className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">
      <div>
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white/90" x-text="pageName">Products</h2>
      <nav>
      <ol className="flex items-center gap-1.5">
      <li>
      <Link className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400" href="/">Home<svg className="stroke-current" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.0765 12.667L10.2432 8.50033L6.0765 4.33366" stroke="" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
    </Link>
    </li>
    <li className="text-sm text-gray-800 dark:text-white/90">Products</li>
    </ol>
    </nav>
    </div>
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
    <div className="flex flex-col justify-between gap-5 border-b border-gray-200 px-5 py-4 sm:flex-row sm:items-center dark:border-gray-800">
        <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">Products List</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Track your store's progress to boost your sales.</p>
    </div>
    <div className="flex gap-3">
    <button className="inline-flex items-center justify-center font-medium gap-2 rounded-lg transition  px-5 py-3.5 text-sm bg-white text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:ring-gray-700 dark:hover:bg-white/[0.03] dark:hover:text-gray-300 ">Export<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
     <path d="M16.667 13.3333V15.4166C16.667 16.1069 16.1074 16.6666 15.417 16.6666H4.58295C3.89259 16.6666 3.33295 16.1069 3.33295 15.4166V13.3333M10.0013 13.3333L10.0013 3.33325M6.14547 9.47942L9.99951 13.331L13.8538 9.47942" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
     </path>
     </svg>
     </button>
     <Link className="bg-brand-500 shadow-sm hover inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-medium text-white transition hover:bg-brand-600" href="/add-product">
     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 10.0002H15.0006M10.0002 5V15.0006" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">

     </path>
     </svg>Add Product
     </Link>
     </div>
     </div>
     <div className="border-b border-gray-200 px-5 py-4 dark:border-gray-800">
     <div className="flex gap-3 sm:justify-between">
     <div className="relative flex-1 sm:flex-auto">
     <span className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-500 dark:text-gray-400">
     <svg className="fill-current" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M3.04199 9.37336937363C3.04199 5.87693 5.87735 3.04199 9.37533 3.04199C12.8733 3.04199 15.7087 5.87693 15.7087 9.37363C15.7087 12.8703 12.8733 15.7053 9.37533 15.7053C5.87735 15.7053 3.04199 12.8703 3.04199 9.37363ZM9.37533 1.54199C5.04926 1.54199 1.54199 5.04817 1.54199 9.37363C1.54199 13.6991 5.04926 17.2053 9.37533 17.2053C11.2676 17.2053 13.0032 16.5344 14.3572 15.4176L17.1773 18.238C17.4702 18.5309 17.945 18.5309 18.2379 18.238C18.5308 17.9451 18.5309 17.4703 18.238 17.1773L15.4182 14.3573C16.5367 13.0033 17.2087 11.2669 17.2087 9.37363C17.2087 5.04817 13.7014 1.54199 9.37533 1.54199Z" fill="">
      </path>
      </svg>
      
      </span>
      <input placeholder="Search..." className="shadow-sm focus:border-brand-300 focus:ring-brand-500/10 dark:focus:border-brand-800 h-11 w-full rounded-lg border border-gray-300 bg-transparent py-2.5 pr-4 pl-11 text-sm text-gray-800 placeholder:text-gray-400 focus:ring-3 focus:outline-none sm:w-[300px] sm:min-w-[300px] dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30" type="text"/>
      </div>
      <div className="relative">
      <button className="shadow-theme-xs flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 sm:w-auto sm:min-w-[100px] dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400" type="button">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
       <path d="M14.6537 5.90414C14.6537 4.48433 13.5027 3.33331 12.0829 3.33331C10.6631 3.33331 9.51206 4.48433 9.51204 5.90415M14.6537 5.90414C14.6537 7.32398 13.5027 8.47498 12.0829 8.47498C10.663 8.47498 9.51204 7.32398 9.51204 5.90415M14.6537 5.90414L17.7087 5.90411M9.51204 5.90415L2.29199 5.90411M5.34694 14.0958C5.34694 12.676 6.49794 11.525 7.91777 11.525C9.33761 11.525 10.4886 12.676 10.4886 14.0958M5.34694 14.0958C5.34694 15.5156 6.49794 16.6666 7.91778 16.6666C9.33761 16.6666 10.4886 15.5156 10.4886 14.0958M5.34694 14.0958L2.29199 14.0958M10.4886 14.0958L17.7087 14.0958" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
       </path>
       </svg>Filter
       </button>
       </div>
       </div>
       </div>
       <div className="overflow-x-auto custom-scrollbar">
       <table className="w-full">
       <thead>
       <tr className="border-b border-gray-200 dark:divide-gray-800 dark:border-gray-800">
       <th className="w-14 px-5 py-4 text-left">
       <label className="cursor-pointer text-sm font-medium text-gray-700 select-none dark:text-gray-400">
       <input className="sr-only" type="checkbox"/>
       <span className="flex h-4 w-4 items-center justify-center rounded-sm border-[1.25px] bg-transparent border-gray-300 dark:border-gray-700">
        <span className="opacity-0">
       <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="1.6666" strokeLinecap="round" strokeLinejoin="round">
        </path>
        </svg>
       </span>
       </span>
        </label>
        </th>
        <th className="cursor-pointer px-5 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400">
        <div className="flex items-center gap-3">
        <p className="text-xs font-medium text-gray-500 dark:text-gray-400">Products</p>
        <span className="flex flex-col gap-0.5">
        <svg className="text-gray-500 dark:text-gray-400" width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.40962 0.585167C4.21057 0.300808 3.78943 0.300807 3.59038 0.585166L1.05071 4.21327C0.81874 4.54466 1.05582 5 1.46033 5H6.53967C6.94418 5 7.18126 4.54466 6.94929 4.21327L4.40962 0.585167Z" fill="currentColor">
            </path>
            </svg>
         <svg className="text-gray-300 dark:text-gray-400/50" width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.40962 4.41483C4.21057 4.69919 3.78943 4.69919 3.59038 4.41483L1.05071 0.786732C0.81874 0.455343 1.05582 0 1.46033 0H6.53967C6.94418 0 7.18126 0.455342 6.94929 0.786731L4.40962 4.41483Z" fill="currentColor">

         </path>
         </svg>
         </span>
         </div>
         </th>
         <th className="cursor-pointer px-5 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400">
         <div className="flex items-center gap-3">
            <p className="text-xs font-medium text-gray-500 dark:text-gray-400">Category</p>
         <span className="flex flex-col gap-0.5">
            <svg className="text-gray-300 dark:text-gray-400/50" width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.40962 0.585167C4.21057 0.300808 3.78943 0.300807 3.59038 0.585166L1.05071 4.21327C0.81874 4.54466 1.05582 5 1.46033 5H6.53967C6.94418 5 7.18126 4.54466 6.94929 4.21327L4.40962 0.585167Z" fill="currentColor">
            </path>
          </svg>
          <svg className="text-gray-300 dark:text-gray-400/50" width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.40962 4.41483C4.21057 4.69919 3.78943 4.69919 3.59038 4.41483L1.05071 0.786732C0.81874 0.455343 1.05582 0 1.46033 0H6.53967C6.94418 0 7.18126 0.455342 6.94929 0.786731L4.40962 4.41483Z" fill="currentColor">
            </path>
          </svg>
          </span>
          </div>
          </th>
          <th className="cursor-pointer px-5 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-3">
            <p className="text-xs font-medium text-gray-500 dark:text-gray-400">Brand</p>
          <span className="flex flex-col gap-0.5">
            <svg className="text-gray-300 dark:text-gray-400/50" width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.40962 0.585167C4.21057 0.300808 3.78943 0.300807 3.59038 0.585166L1.05071 4.21327C0.81874 4.54466 1.05582 5 1.46033 5H6.53967C6.94418 5 7.18126 4.54466 6.94929 4.21327L4.40962 0.585167Z" fill="currentColor">
            </path>
          </svg>
          <svg className="text-gray-300 dark:text-gray-400/50" width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.40962 4.41483C4.21057 4.69919 3.78943 4.69919 3.59038 4.41483L1.05071 0.786732C0.81874 0.455343 1.05582 0 1.46033 0H6.53967C6.94418 0 7.18126 0.455342 6.94929 0.786731L4.40962 4.41483Z" fill="currentColor">

          </path>
          </svg>
          </span>
          </div>
          </th>
          <th className="cursor-pointer px-5 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-3">
            <p className="text-xs font-medium text-gray-500 dark:text-gray-400">Price</p>
          <span className="flex flex-col gap-0.5">
            <svg className="text-gray-300" width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.40962 0.585167C4.21057 0.300808 3.78943 0.300807 3.59038 0.585166L1.05071 4.21327C0.81874 4.54466 1.05582 5 1.46033 5H6.53967C6.94418 5 7.18126 4.54466 6.94929 4.21327L4.40962 0.585167Z" fill="currentColor">
            </path>
          </svg>
          <svg className="text-gray-300" width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.40962 4.41483C4.21057 4.69919 3.78943 4.69919 3.59038 4.41483L1.05071 0.786732C0.81874 0.455343 1.05582 0 1.46033 0H6.53967C6.94418 0 7.18126 0.455342 6.94929 0.786731L4.40962 4.41483Z" fill="currentColor">
            </path>
          </svg>
          </span>
          </div>
          </th>
          <th className="px-5 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400">Stock</th>
          <th className="px-5 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400">Created At</th>
          <th className="px-5 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400">
            <div className="relative">
            <span className="sr-only">Action</span>
          </div>
          </th></tr>
          </thead>
          <tbody className="divide-x divide-y divide-gray-200 dark:divide-gray-800">
            <tr className="transition hover:bg-gray-50 dark:hover:bg-gray-900">
            <td className="w-14 px-5 py-4 whitespace-nowrap">
            <label className="cursor-pointer text-sm font-medium text-gray-700 select-none dark:text-gray-400">
            <input className="sr-only" type="checkbox"/>
          <span className="flex h-4 w-4 items-center justify-center rounded-sm border-[1.25px] bg-transparent border-gray-300 dark:border-gray-700">
            <span className="opacity-0">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="1.6666" strokeLinecap="round" strokeLinejoin="round">
            </path>
          </svg>
          </span>
          </span>
          </label>
          </td>
          <td className="px-5 py-4 whitespace-nowrap">
            <div className="flex items-center gap-3">
            <div className="h-12 w-12">
            <Image alt="hello" loading="lazy" width="48" height="48" decoding="async" data-nimg="1" className="h-12 w-12 rounded-md" srcSet ="/_next/image?url=%2Fimages%2Fproduct%2Fproduct-03.jpg&amp;w=48&amp;q=75 1x, /_next/image?url=%2Fimages%2Fproduct%2Fproduct-03.jpg&amp;w=96&amp;q=75 2x" src="/_next/image?url=%2Fimages%2Fproduct%2Fproduct-03.jpg&amp;w=96&amp;q=75" /></div>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-400">ASUS ROG Gaming Laptop</span></div>
          </td>
          <td className="px-5 py-4 whitespace-nowrap">
            <p className="text-sm text-gray-500 dark:text-gray-400">Laptop</p>
          </td>
          <td className="px-5 py-4 whitespace-nowrap">
            <p className="text-sm text-gray-700 dark:text-gray-400">ASUS</p>
          </td>
          <td className="px-5 py-4 whitespace-nowrap">
            <p className="text-sm text-gray-700 dark:text-gray-400">$2,199</p>
          </td>
          <td className="px-5 py-4 whitespace-nowrap"><span className="text-xs rounded-full px-2 py-0.5 font-medium bg-red-50 dark:bg-red-500/15 text-red-700 dark:text-red-500">Out of Stock</span>
          </td>
          <td className="px-5 py-4 whitespace-nowrap">
            <p className="text-sm text-gray-700 dark:text-gray-400">01 Dec, 2027</p>
          </td>
          <td className="px-5 py-4 whitespace-nowrap"></td></tr>
          <tr className="transition hover:bg-gray-50 dark:hover:bg-gray-900">
            <td className="w-14 px-5 py-4 whitespace-nowrap">
            <label className="cursor-pointer text-sm font-medium text-gray-700 select-none dark:text-gray-400">
            <input className="sr-only" type="checkbox"/>
          <span className="flex h-4 w-4 items-center justify-center rounded-sm border-[1.25px] bg-transparent border-gray-300 dark:border-gray-700"><span className="opacity-0">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="1.6666" strokeLinecap="round" strokeLinejoin="round">
            </path>
          </svg>
          </span>
          </span>
          </label>
          </td>
          <td className="px-5 py-4 whitespace-nowrap">
            <div className="flex items-center gap-3">
            <div className="h-12 w-12">
                <Image alt="hello" loading="lazy" width="48" height="48" decoding="async" data-nimg="1" className="h-12 w-12 rounded-md" srcSet ="/_next/image?url=%2Fimages%2Fproduct%2Fproduct-01.jpg&amp;w=48&amp;q=75 1x, /_next/image?url=%2Fimages%2Fproduct%2Fproduct-01.jpg&amp;w=96&amp;q=75 2x" src="/_next/image?url=%2Fimages%2Fproduct%2Fproduct-01.jpg&amp;w=96&amp;q=75" />
          </div>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-400">Airpods Pro 2nd Gen</span>
          </div>
          </td>
          <td className="px-5 py-4 whitespace-nowrap">
            <p className="text-sm text-gray-500 dark:text-gray-400">Accessories</p></td>
          <td className="px-5 py-4 whitespace-nowrap">
            <p className="text-sm text-gray-700 dark:text-gray-400">Apple</p>
          </td>
          <td className="px-5 py-4 whitespace-nowrap">
            <p className="text-sm text-gray-700 dark:text-gray-400">$839</p>
          </td>
          <td className="px-5 py-4 whitespace-nowrap">
            <span className="text-xs rounded-full px-2 py-0.5 font-medium bg-green-50 dark:bg-green-500/15 text-green-700 dark:text-green-500">In Stock</span>
          </td>
          <td className="px-5 py-4 whitespace-nowrap">
            <p className="text-sm text-gray-700 dark:text-gray-400">29 Jun, 2027</p>
          </td>
          <td className="px-5 py-4 whitespace-nowrap">
            </td>
          </tr>
          <tr className="transition hover:bg-gray-50 dark:hover:bg-gray-900">
            <td className="w-14 px-5 py-4 whitespace-nowrap">
            <label className="cursor-pointer text-sm font-medium text-gray-700 select-none dark:text-gray-400">
            <input className="sr-only" type="checkbox"/>
          <span className="flex h-4 w-4 items-center justify-center rounded-sm border-[1.25px] bg-transparent border-gray-300 dark:border-gray-700">
            <span className="opacity-0">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="1.6666" strokeLinecap="round" strokeLinejoin="round">
            </path>
          </svg></span>
          </span>
          </label>
          </td>
          <td className="px-5 py-4 whitespace-nowrap">
            <div className="flex items-center gap-3">
            <div className="h-12 w-12">
            <Image alt="hello" loading="lazy" width="48" height="48" decoding="async" data-nimg="1" className="h-12 w-12 rounded-md" srcSet ="/_next/image?url=%2Fimages%2Fproduct%2Fproduct-02.jpg&amp;w=48&amp;q=75 1x, /_next/image?url=%2Fimages%2Fproduct%2Fproduct-02.jpg&amp;w=96&amp;q=75 2x" src="/_next/image?url=%2Fimages%2Fproduct%2Fproduct-02.jpg&amp;w=96&amp;q=75" /></div>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-400">Apple Watch Ultra</span>
          </div></td>
          <td className="px-5 py-4 whitespace-nowrap">
            <p className="text-sm text-gray-500 dark:text-gray-400">Watch</p>
          </td>
          <td className="px-5 py-4 whitespace-nowrap"><p className="text-sm text-gray-700 dark:text-gray-400">Apple</p>
          </td>
          <td className="px-5 py-4 whitespace-nowrap">
            <p className="text-sm text-gray-700 dark:text-gray-400">$1,579</p>
          </td>
          <td className="px-5 py-4 whitespace-nowrap">
            <span className="text-xs rounded-full px-2 py-0.5 font-medium bg-red-50 dark:bg-red-500/15 text-red-700 dark:text-red-500">Out of Stock</span>
          </td>
          <td className="px-5 py-4 whitespace-nowrap">
            <p className="text-sm text-gray-700 dark:text-gray-400">13 Mar, 2027</p>
          </td>
          <td className="px-5 py-4 whitespace-nowrap">
            </td>
          </tr>
          <tr className="transition hover:bg-gray-50 dark:hover:bg-gray-900">
            <td className="w-14 px-5 py-4 whitespace-nowrap">
            <label className="cursor-pointer text-sm font-medium text-gray-700 select-none dark:text-gray-400">
            <input className="sr-only" type="checkbox"/>
          <span className="flex h-4 w-4 items-center justify-center rounded-sm border-[1.25px] bg-transparent border-gray-300 dark:border-gray-700">
            <span className="opacity-0">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="1.6666" strokeLinecap="round" strokeLinejoin="round">
            </path>
          </svg>
          </span>
          </span>
          </label>
          </td>
          <td className="px-5 py-4 whitespace-nowrap">
            <div className="flex items-center gap-3">
            <div className="h-12 w-12">
            <Image alt="hello" loading="lazy" width="48" height="48" decoding="async" data-nimg="1" className="h-12 w-12 rounded-md" srcSet ="/_next/image?url=%2Fimages%2Fproduct%2Fproduct-01.jpg&amp;w=48&amp;q=75 1x, /_next/image?url=%2Fimages%2Fproduct%2Fproduct-01.jpg&amp;w=96&amp;q=75 2x" src="/_next/image?url=%2Fimages%2Fproduct%2Fproduct-01.jpg&amp;w=96&amp;q=75" /></div><span className="text-sm font-medium text-gray-700 dark:text-gray-400">Bose QuietComfort Earbuds</span></div></td>
          <td className="px-5 py-4 whitespace-nowrap">
            <p className="text-sm text-gray-500 dark:text-gray-400">Audio</p>
          </td>
          <td className="px-5 py-4 whitespace-nowrap">
            <p className="text-sm text-gray-700 dark:text-gray-400">Bose</p>
          </td>
          <td className="px-5 py-4 whitespace-nowrap">
            <p className="text-sm text-gray-700 dark:text-gray-400">$279</p>
          </td>
          <td className="px-5 py-4 whitespace-nowrap">
            <span className="text-xs rounded-full px-2 py-0.5 font-medium bg-green-50 dark:bg-green-500/15 text-green-700 dark:text-green-500">In Stock</span>
          </td>
          <td className="px-5 py-4 whitespace-nowrap">
            <p className="text-sm text-gray-700 dark:text-gray-400">18 Nov, 2027</p>
          </td>
          <td className="px-5 py-4 whitespace-nowrap">
            </td>
          </tr>
          <tr className="transition hover:bg-gray-50 dark:hover:bg-gray-900">
            <td className="w-14 px-5 py-4 whitespace-nowrap">
            <label className="cursor-pointer text-sm font-medium text-gray-700 select-none dark:text-gray-400">
            <input className="sr-only" type="checkbox"/>
          <span className="flex h-4 w-4 items-center justify-center rounded-sm border-[1.25px] bg-transparent border-gray-300 dark:border-gray-700">
            <span className="opacity-0"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="1.6666" strokeLinecap="round" strokeLinejoin="round">
            </path>
          </svg></span>
          </span>
          </label>
          </td>
          <td className="px-5 py-4 whitespace-nowrap">
            <div className="flex items-center gap-3">
            <div className="h-12 w-12">
            <Image alt="hello" loading="lazy" width="48" height="48" decoding="async" data-nimg="1" className="h-12 w-12 rounded-md" srcSet ="/_next/image?url=%2Fimages%2Fproduct%2Fproduct-02.jpg&amp;w=48&amp;q=75 1x, /_next/image?url=%2Fimages%2Fproduct%2Fproduct-02.jpg&amp;w=96&amp;q=75 2x" src="/_next/image?url=%2Fimages%2Fproduct%2Fproduct-02.jpg&amp;w=96&amp;q=75" />
            </div>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-400">Canon EOS R5 Camera</span>
          </div></td>
          <td className="px-5 py-4 whitespace-nowrap">
            <p className="text-sm text-gray-500 dark:text-gray-400">Camera</p>
          </td>
          <td className="px-5 py-4 whitespace-nowrap"><p className="text-sm text-gray-700 dark:text-gray-400">Canon</p>
          </td>
          <td className="px-5 py-4 whitespace-nowrap">
            <p className="text-sm text-gray-700 dark:text-gray-400">$3,899</p>
          </td>
          <td className="px-5 py-4 whitespace-nowrap">
            <span className="text-xs rounded-full px-2 py-0.5 font-medium bg-green-50 dark:bg-green-500/15 text-green-700 dark:text-green-500">In Stock</span>
          </td>
          <td className="px-5 py-4 whitespace-nowrap">
            <p className="text-sm text-gray-700 dark:text-gray-400">28 Sep, 2027</p>
          </td>
          <td className="px-5 py-4 whitespace-nowrap">
            </td>
          </tr>
          <tr className="transition hover:bg-gray-50 dark:hover:bg-gray-900">
            <td className="w-14 px-5 py-4 whitespace-nowrap">
            <label className="cursor-pointer text-sm font-medium text-gray-700 select-none dark:text-gray-400">
            <input className="sr-only" type="checkbox"/>
          <span className="flex h-4 w-4 items-center justify-center rounded-sm border-[1.25px] bg-transparent border-gray-300 dark:border-gray-700">
            <span className="opacity-0">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="1.6666" strokeLinecap="round" strokeLinejoin="round">
            </path>
          </svg>
          </span>
          </span>
          </label>
          </td>
          <td className="px-5 py-4 whitespace-nowrap">
            <div className="flex items-center gap-3">
            <div className="h-12 w-12">
            <Image alt="hello" loading="lazy" width="48" height="48" decoding="async" data-nimg="1" className="h-12 w-12 rounded-md" srcSet ="/_next/image?url=%2Fimages%2Fproduct%2Fproduct-04.jpg&amp;w=48&amp;q=75 1x, /_next/image?url=%2Fimages%2Fproduct%2Fproduct-04.jpg&amp;w=96&amp;q=75 2x" src="/_next/image?url=%2Fimages%2Fproduct%2Fproduct-04.jpg&amp;w=96&amp;q=75" />
          </div>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-400">Dell XPS 13 Laptop</span>
          </div>
          </td>
          <td className="px-5 py-4 whitespace-nowrap">
            <p className="text-sm text-gray-500 dark:text-gray-400">Laptop</p>
          </td>
          <td className="px-5 py-4 whitespace-nowrap">
            <p className="text-sm text-gray-700 dark:text-gray-400">Dell</p></td>
          <td className="px-5 py-4 whitespace-nowrap">
            <p className="text-sm text-gray-700 dark:text-gray-400">$1,299</p>
          </td>
          <td className="px-5 py-4 whitespace-nowrap">
            <span className="text-xs rounded-full px-2 py-0.5 font-medium bg-green-50 dark:bg-green-500/15 text-green-700 dark:text-green-500">In Stock</span></td><td className="px-5 py-4 whitespace-nowrap">
            <p className="text-sm text-gray-700 dark:text-gray-400">18 Aug, 2027</p>
            </td>
            <td className="px-5 py-4 whitespace-nowrap">

          </td>
          </tr>
          <tr className="transition hover:bg-gray-50 dark:hover:bg-gray-900">
            <td className="w-14 px-5 py-4 whitespace-nowrap">
            <label className="cursor-pointer text-sm font-medium text-gray-700 select-none dark:text-gray-400">
            <input className="sr-only" type="checkbox"/><span className="flex h-4 w-4 items-center justify-center rounded-sm border-[1.25px] bg-transparent border-gray-300 dark:border-gray-700">
            <span className="opacity-0"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="1.6666" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>
          </span>
          </label>
          </td>
          <td className="px-5 py-4 whitespace-nowrap">
            <div className="flex items-center gap-3">
            <div className="h-12 w-12"><Image alt="hello" loading="lazy" width="48" height="48" decoding="async" data-nimg="1" className="h-12 w-12 rounded-md" srcSet ="/_next/image?url=%2Fimages%2Fproduct%2Fproduct-05.jpg&amp;w=48&amp;q=75 1x, /_next/image?url=%2Fimages%2Fproduct%2Fproduct-05.jpg&amp;w=96&amp;q=75 2x" src="/_next/image?url=%2Fimages%2Fproduct%2Fproduct-05.jpg&amp;w=96&amp;q=75"/></div>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-400">Google Pixel 8 Pro</span></div></td>
          <td className="px-5 py-4 whitespace-nowrap"><p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
          </td>
          <td className="px-5 py-4 whitespace-nowrap"><p className="text-sm text-gray-700 dark:text-gray-400">Google</p>
          </td>
          <td className="px-5 py-4 whitespace-nowrap">
            <p className="text-sm text-gray-700 dark:text-gray-400">$899</p>
          </td>
          <td className="px-5 py-4 whitespace-nowrap"><span className="text-xs rounded-full px-2 py-0.5 font-medium bg-red-50 dark:bg-red-500/15 text-red-700 dark:text-red-500">Out of Stock</span>
          </td>
          <td className="px-5 py-4 whitespace-nowrap"><p className="text-sm text-gray-700 dark:text-gray-400">02 Sep, 2027</p>
          </td>
          <td className="px-5 py-4 whitespace-nowrap">

          </td>
          </tr>
          </tbody>
          </table>
          </div>
          <div className="flex items-center flex-col sm:flex-row justify-between border-t border-gray-200 px-5 py-4 dark:border-gray-800">
            <div className="pb-3 sm:pb-0">
            <span className="block text-sm font-medium text-gray-500 dark:text-gray-400">Showing 
            <span className="text-gray-800 dark:text-white/90">1</span> to <span className="text-gray-800 dark:text-white/90">7</span> of <span className="text-gray-800 dark:text-white/90">20</span>
          </span>
          </div>
          <div className="flex w-full items-center justify-between gap-2 rounded-lg bg-gray-50 p-4 sm:w-auto sm:justify-normal sm:rounded-none sm:bg-transparent sm:p-0 dark:bg-gray-900 dark:sm:bg-transparent">
            <button className="shadow-sm flex items-center gap-2 rounded-lg border border-gray-300 bg-white p-2 text-gray-700 hover:bg-gray-50 hover:text-gray-800 disabled:cursor-not-allowed disabled:opacity-50 sm:p-2.5 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-200">
          <span>
            <svg className="fill-current" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M2.58203 9.99868C2.58174 10.1909 2.6549 10.3833 2.80152 10.53L7.79818 15.5301C8.09097 15.8231 8.56584 15.8233 8.85883 15.5305C9.15183 15.2377 9.152 14.7629 8.85921 14.4699L5.13911 10.7472L16.6665 10.7472C17.0807 10.7472 17.4165 10.4114 17.4165 9.99715C17.4165 9.58294 17.0807 9.24715 16.6665 9.24715L5.14456 9.24715L8.85919 5.53016C9.15199 5.23717 9.15184 4.7623 8.85885 4.4695C8.56587 4.1767 8.09099 4.17685 7.79819 4.46984L2.84069 9.43049C2.68224 9.568 2.58203 9.77087 2.58203 9.99715C2.58203 9.99766 2.58203 9.99817 2.58203 9.99868Z">
            </path>
            </svg>
            </span>
            </button>
            <span className="block text-sm font-medium text-gray-700 sm:hidden dark:text-gray-400">Page <span>1</span> of <span>3</span>
          </span><ul className="hidden items-center gap-0.5 sm:flex">
            <li>
                <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-lg text-sm font-medium bg-brand-500 text-white">
            <span>1</span></Link>
          </li>
          <li>
            <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-lg text-sm font-medium text-gray-700 dark:text-gray-400 hover:bg-brand-500 hover:text-white dark:hover:text-white"><span>2</span>
          </Link>
          </li>
          <li>
            <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-lg text-sm font-medium text-gray-700 dark:text-gray-400 hover:bg-brand-500 hover:text-white dark:hover:text-white">
            <span>3</span>
          </Link>
          </li>
          </ul>
          <button className="shadow-sm flex items-center gap-2 rounded-lg border border-gray-300 bg-white p-2 text-gray-700 hover:bg-gray-50 hover:text-gray-800 disabled:cursor-not-allowed disabled:opacity-50 sm:p-2.5 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-200">
          <span>
            <svg className="fill-current" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M17.4165 9.9986C17.4168 10.1909 17.3437 10.3832 17.197 10.53L12.2004 15.5301C11.9076 15.8231 11.4327 15.8233 11.1397 15.5305C10.8467 15.2377 10.8465 14.7629 11.1393 14.4699L14.8594 10.7472L3.33203 10.7472C2.91782 10.7472 2.58203 10.4114 2.58203 9.99715C2.58203 9.58294 2.91782 9.24715 3.33203 9.24715L14.854 9.24715L11.1393 5.53016C10.8465 5.23717 10.8467 4.7623 11.1397 4.4695C11.4327 4.1767 11.9075 4.17685 12.2003 4.46984L17.1578 9.43049C17.3163 9.568 17.4165 9.77087 17.4165 9.99715C17.4165 9.99763 17.4165 9.99812 17.4165 9.9986Z">
            </path>
            </svg>
            </span>
            </button>
            </div>
            </div>
          </div>
          </div>
          </div>
    </div>
  )
}
