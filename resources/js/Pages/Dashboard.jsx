import React, { useState } from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    // 1. DATA DUMMY LENGKAP (Sesuai Struktur Screenshot)
    const allMedicines = [
        // EMERGENCY DATA (Berdasarkan Screenshot + Tambahan Standar IGD)
        { id: 1, nama: 'Aldisa SR', kandungan: 'Loratadine, Pseudoefedrin', sediaan: 'Tablet', dosis: '-', kategori: 'EMERGENCY', stok: 0, tren: 0 },
        { id: 2, nama: 'Farbivent Nebu', kandungan: '-', sediaan: 'Inhalasi/Ampul', dosis: '-', kategori: 'EMERGENCY', stok: 0, tren: 0 },
        { id: 3, nama: 'Furosemide', kandungan: 'Furosemide', sediaan: 'Tablet', dosis: '40mg', kategori: 'EMERGENCY', stok: 50, tren: 0 },
        { id: 4, nama: 'Pulmicort respules', kandungan: '-', sediaan: 'Fial / Ampul', dosis: '-', kategori: 'EMERGENCY', stok: 0, tren: 0 },
        { id: 5, nama: 'Epinephrine', kandungan: 'Epinephrine', sediaan: 'Ampul', dosis: '1mg/ml', kategori: 'EMERGENCY', stok: 15, tren: 5 },
        { id: 6, nama: 'Atropine Sulfate', kandungan: 'Atropine', sediaan: 'Ampul', dosis: '0.25mg/ml', kategori: 'EMERGENCY', stok: 0, tren: 2 },
        { id: 7, nama: 'Dexamethasone Injeksi', kandungan: 'Dexamethasone', sediaan: 'Ampul', dosis: '5mg/ml', kategori: 'EMERGENCY', stok: 8, tren: 10 },
        { id: 8, nama: 'Diazepam Injeksi', kandungan: 'Diazepam', sediaan: 'Ampul', dosis: '5mg/ml', kategori: 'EMERGENCY', stok: 2, tren: 1 },
        { id: 9, nama: 'Amiodarone', kandungan: 'Amiodarone HCl', sediaan: 'Ampul', dosis: '150mg/3ml', kategori: 'EMERGENCY', stok: 5, tren: 0 },
        
        // REGULER DATA (Obat-obatan Klinik Umum)
        { id: 10, nama: 'Paracetamol', kandungan: 'Paracetamol', sediaan: 'Tablet', dosis: '500mg', kategori: 'REGULER', stok: 1250, tren: 300 },
        { id: 11, nama: 'Amoxicillin', kandungan: 'Amoxicillin', sediaan: 'Kapsul', dosis: '500mg', kategori: 'REGULER', stok: 850, tren: 150 },
        { id: 12, nama: 'Omeprazole', kandungan: 'Omeprazole', sediaan: 'Kapsul', dosis: '20mg', kategori: 'REGULER', stok: 420, tren: 85 },
        { id: 13, nama: 'Antasida Doen', kandungan: 'Alumunium Hidroksida, Magnesium', sediaan: 'Tablet Kunyah', dosis: '-', kategori: 'REGULER', stok: 0, tren: 120 },
        { id: 14, cap: 'Cefadroxil', nama: 'Cefadroxil', kandungan: 'Cefadroxil', sediaan: 'Kapsul', dosis: '500mg', kategori: 'REGULER', stok: 310, tren: 60 },
        { id: 15, nama: 'Ibuprofen', kandungan: 'Ibuprofen', sediaan: 'Tablet', dosis: '400mg', kategori: 'REGULER', stok: 500, tren: 210 },
        { id: 16, nama: 'Simvastatin', kandungan: 'Simvastatin', sediaan: 'Tablet', dosis: '20mg', kategori: 'REGULER', stok: 200, tren: 50 },
        { id: 17, nama: 'Amlodipine', kandungan: 'Amlodipine Besylate', sediaan: 'Tablet', dosis: '5mg', kategori: 'REGULER', stok: 8, tren: 90 },
        { id: 18, nama: 'Metformin', kandungan: 'Metformin HCl', sediaan: 'Tablet', dosis: '500mg', kategori: 'REGULER', stok: 0, tren: 110 },
        { id: 19, nama: 'Cetirizine', kandungan: 'Cetirizine HCl', sediaan: 'Tablet', dosis: '10mg', kategori: 'REGULER', stok: 450, tren: 130 },
        { id: 20, nama: 'Salbutamol', kandungan: 'Salbutamol Sulfate', sediaan: 'Tablet', dosis: '2mg', kategori: 'REGULER', stok: 150, tren: 45 },
        { id: 21, nama: 'Vitamin B Complex', kandungan: 'Vitamin B1, B2, B6, B12', sediaan: 'Tablet', dosis: '-', kategori: 'REGULER', stok: 2000, tren: 400 },
        { id: 22, nama: 'Asam Mefenamat', kandungan: 'Mefenamic Acid', sediaan: 'Kaplet', dosis: '500mg', kategori: 'REGULER', stok: 600, tren: 180 },
        { id: 23, nama: 'Ranitidine', kandungan: 'Ranitidine HCl', sediaan: 'Tablet', dosis: '150mg', kategori: 'REGULER', stok: 0, tren: 70 },
        { id: 24, nama: 'Loperamide', kandungan: 'Loperamide HCl', sediaan: 'Tablet', dosis: '2mg', kategori: 'REGULER', stok: 120, tren: 20 },
    ];

    // 2. STATE UNTUK TAB FILTER
    const [activeTab, setActiveTab] = useState('Semua Obat'); // 'Emergency', 'Reguler', 'Semua Obat'

    // 3. LOGIKA FILTER & PERHITUNGAN KARTU RINGKASAN
    const emergencyCount = allMedicines.filter(m => m.kategori === 'EMERGENCY').length;
    const regulerCount = allMedicines.filter(m => m.kategori === 'REGULER').length;
    const totalCount = allMedicines.length;

    const filteredMedicines = allMedicines.filter(medicine => {
        if (activeTab === 'Emergency') return medicine.kategori === 'EMERGENCY';
        if (activeTab === 'Reguler') return medicine.kategori === 'REGULER';
        return true; // Semua Obat
    });

    // 4. HELPER FUNGSI UNTUK STATUS WARNA
    const getStatusInfo = (stok) => {
        if (stok === 0) return { label: 'Habis Total', color: 'bg-[#cc2336] text-white' };
        if (stok <= 10) return { label: 'Stok Kritis', color: 'bg-orange-500 text-white' };
        return { label: 'Aman (Stok Tersedia)', color: 'bg-[#84cc16] text-white' }; // Hijau
    };

    return (
        <AdminLayout>
            <Head title="Dashboard" />
            
            <div className="max-w-7xl mx-auto space-y-6">
                
                {/* --- BAGIAN 1: SUMMARY CARDS --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1: Total Item */}
                    <div className="bg-[#245889] rounded-2xl p-6 text-white shadow-md relative overflow-hidden">
                        <div className="relative z-10">
                            <p className="text-xs font-semibold uppercase tracking-wider mb-2 opacity-90">TOTAL ITEM TERDATA</p>
                            <div className="flex items-baseline gap-2">
                                <h3 className="text-5xl font-bold">{totalCount}</h3>
                                <span className="text-sm opacity-80">Jenis</span>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Emergency */}
                    <div className="bg-[#cc2336] rounded-2xl p-6 text-white shadow-md relative overflow-hidden">
                        <div className="relative z-10">
                            <p className="text-xs font-semibold uppercase tracking-wider mb-2 opacity-90 flex items-center gap-2">
                                <span>⚠️</span> KATEGORI EMERGENCY
                            </p>
                            <div className="flex items-baseline gap-2">
                                <h3 className="text-5xl font-bold">{emergencyCount}</h3>
                                <span className="text-sm opacity-80">Item Kritis</span>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Reguler */}
                    <div className="bg-[#1d3c5f] rounded-2xl p-6 text-white shadow-md relative overflow-hidden">
                        <div className="relative z-10">
                            <p className="text-xs font-semibold uppercase tracking-wider mb-2 opacity-90 flex items-center gap-2">
                                <span>📦</span> KATEGORI REGULER
                            </p>
                            <div className="flex items-baseline gap-2">
                                <h3 className="text-5xl font-bold">{regulerCount}</h3>
                                <span className="text-sm opacity-80">Item Umum</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- BAGIAN 2: TABS & TABLE DATA --- */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    
                    {/* Tabs */}
                    <div className="p-4 border-b border-gray-100 bg-gray-50/50">
                        <div className="inline-flex bg-gray-200/50 p-1 rounded-xl">
                            <button 
                                onClick={() => setActiveTab('Emergency')}
                                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${activeTab === 'Emergency' ? 'bg-white text-red-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                            >
                                <span>⚠️</span> Emergency ({emergencyCount})
                            </button>
                            <button 
                                onClick={() => setActiveTab('Reguler')}
                                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${activeTab === 'Reguler' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                            >
                                <span>📦</span> Reguler ({regulerCount})
                            </button>
                            <button 
                                onClick={() => setActiveTab('Semua Obat')}
                                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'Semua Obat' ? 'bg-white text-gray-800 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                            >
                                Semua Obat ({totalCount})
                            </button>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-gray-100 bg-gray-50/30">
                                    <th className="py-4 px-6 text-xs font-bold text-gray-500 uppercase tracking-wider w-1/4">NAMA OBAT / KANDUNGAN</th>
                                    <th className="py-4 px-6 text-xs font-bold text-gray-500 uppercase tracking-wider">SEDIAAN / DOSIS</th>
                                    <th className="py-4 px-6 text-xs font-bold text-gray-500 uppercase tracking-wider text-center">KATEGORI</th>
                                    <th className="py-4 px-6 text-xs font-bold text-gray-500 uppercase tracking-wider text-center">STOK SAAT INI</th>
                                    <th className="py-4 px-6 text-xs font-bold text-gray-500 uppercase tracking-wider text-center">TREN KELUAR / BLN</th>
                                    <th className="py-4 px-6 text-xs font-bold text-gray-500 uppercase tracking-wider text-center">STATUS ANALISIS TREN KRITIS</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {filteredMedicines.map((item) => {
                                    const status = getStatusInfo(item.stok);
                                    
                                    return (
                                        <tr key={item.id} className="hover:bg-gray-50/50 transition-colors">
                                            <td className="py-4 px-6">
                                                <div className="font-bold text-gray-800">{item.nama}</div>
                                                <div className="text-xs text-gray-400 mt-1">{item.kandungan}</div>
                                            </td>
                                            <td className="py-4 px-6">
                                                <div className="text-sm text-gray-700">{item.sediaan} | <span className="text-gray-400">{item.dosis}</span></div>
                                            </td>
                                            <td className="py-4 px-6 text-center">
                                                <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-wider ${
                                                    item.kategori === 'EMERGENCY' ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-blue-600'
                                                }`}>
                                                    {item.kategori}
                                                </span>
                                            </td>
                                            <td className="py-4 px-6 text-center">
                                                <span className="font-bold text-gray-800">{item.stok}</span>
                                            </td>
                                            <td className="py-4 px-6 text-center">
                                                <span className="text-gray-500">{item.tren}</span>
                                            </td>
                                            <td className="py-4 px-6 text-center">
                                                <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold w-40 text-center ${status.color}`}>
                                                    {status.label}
                                                </span>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                        
                        {/* Empty State jika data kosong */}
                        {filteredMedicines.length === 0 && (
                            <div className="py-12 text-center text-gray-500">
                                Tidak ada data obat untuk kategori ini.
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </AdminLayout>
    );
}