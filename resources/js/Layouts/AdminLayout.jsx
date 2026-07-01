import React from 'react';
import { Link, usePage } from '@inertiajs/react';

export default function AdminLayout({ children }) {
    const { auth } = usePage().props;

    // Helper untuk mengecek active route
    const isActive = (path) => window.location.pathname.startsWith(path);

    return (
        <div className="flex min-h-screen bg-gray-50 font-sans">
            {/* SIDEBAR */}
            <aside className="w-64 bg-white border-r border-gray-200 flex flex-col justify-between hidden md:flex">
                <div>
                    {/* Logo Area */}
                    <div className="h-20 flex items-center px-6 border-b border-gray-100">
                        <div className="flex items-center gap-3">
                            {/* Placeholder Logo mirip Pertamina di gambar */}
                            <div className="flex flex-col gap-0.5">
                                <div className="flex gap-1">
                                    <div className="w-3 h-3 bg-blue-600 rounded-sm"></div>
                                    <div className="w-3 h-3 bg-red-600 rounded-sm"></div>
                                </div>
                                <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
                            </div>
                            <div>
                                <h1 className="text-sm font-bold text-gray-800 leading-tight">PERTAMINA</h1>
                                <p className="text-[10px] text-gray-500 tracking-wider">GEOTHERMAL ENERGY</p>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Menu */}
                    <nav className="p-4 space-y-2 overflow-y-auto max-h-[calc(100vh-8rem)] mt-2">
                        {/* Dashboard */}
                        <Link
                            href={route('dashboard')}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${
                                isActive('/dashboard')
                                    ? 'bg-[#84cc16] text-white shadow-sm' // Hijau cerah sesuai gambar
                                    : 'text-gray-500 hover:bg-gray-50'
                            }`}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                            </svg>
                            Dashboard
                        </Link>

                        {/* Inventory Management */}
                        <Link
                            href="#"
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${
                                isActive('/inventory')
                                    ? 'bg-[#84cc16] text-white shadow-sm'
                                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                            }`}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                            </svg>
                            Inventory Management
                        </Link>

                        {/* Reports */}
                        <Link
                            href="#"
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${
                                isActive('/reports')
                                    ? 'bg-[#84cc16] text-white shadow-sm'
                                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                            }`}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                            </svg>
                            Reports
                        </Link>

                        {/* Users */}
                        <Link
                            href="#"
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${
                                isActive('/users')
                                    ? 'bg-[#84cc16] text-white shadow-sm'
                                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                            }`}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                            </svg>
                            Users
                        </Link>

                        {/* Settings */}
                        <Link
                            href="#"
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${
                                isActive('/settings')
                                    ? 'bg-[#84cc16] text-white shadow-sm'
                                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                            }`}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                            Settings
                        </Link>
                    </nav>
                </div>

                {/* User Profile Bottom */}
                <div className="p-4 border-t border-gray-100">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-gray-800 text-white flex items-center justify-center font-bold text-sm">
                            {auth?.user?.nama?.charAt(0) || 'A'}
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">{auth?.user?.nama || 'Administrator'}</p>
                            <p className="text-xs text-gray-500 truncate">Admin Klinik</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* MAIN CONTENT AREA */}
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                {/* TOP NAVBAR */}
                <header className="bg-white border-b border-gray-200 h-20 flex items-center justify-between px-8 shrink-0">
                    <div>
                        <h2 className="text-xl font-bold text-gray-800 uppercase tracking-wide">HEALTH & MEDICAL INVENTORY</h2>
                        <div className="flex items-center gap-3 mt-1">
                            <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest">PERTAMINA CLINIC MANAGEMENT SYSTEM</p>
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-green-50 text-green-600 border border-green-200">
                                LIVE MYSQL VERIFIED
                            </span>
                        </div>
                    </div>

                    {/* Search Bar Placeholder */}
                    <div className="w-80 relative">
                        <input
                            type="text"
                            placeholder="Cari nama obat atau kandungan..."
                            className="w-full bg-gray-50 border border-gray-200 text-sm rounded-full pl-4 pr-10 py-2.5 focus:outline-none focus:ring-1 focus:ring-[#84cc16] focus:border-[#84cc16] transition-colors"
                        />
                        <svg className="w-5 h-5 text-gray-400 absolute right-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </div>
                </header>

                {/* PAGE CONTENT */}
                <main className="flex-1 overflow-y-auto p-8 bg-gray-50">
                    {children}
                </main>
            </div>
        </div>
    );
}