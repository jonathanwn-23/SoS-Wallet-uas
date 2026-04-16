import PostFormModal from "@/components/PostFormModal";
import { Head, usePage, router, Link } from "@inertiajs/react";
import { useState } from "react";
import { Toaster, toast } from "sonner";

export default function index() {
    //pagination (halaman)
    const { posts, filters } = usePage<any>().props;
    const dataPosts = posts.data; 

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);

    //kotak pencarian (search bar)
    const [searchQuery, setSearchQuery] = useState(filters?.search || "");

    const openModal = (post: any = null) => {
        setSelectedPost(post);
        setIsModalOpen(true);
    };

    const handleDelete = (id: number) => {
        router.delete(`/posts/${id}`, {
            onSuccess: () => {
                toast.success("Data Berhasil Dihapus");
            },
            onError: () => {
                toast.error("Data Gagal Dihapus");
            },
        });
    };

    // fungsi pencarian langsung (live search)
    const handleSearch = (e: any) => {
        const value = e.target.value;
        setSearchQuery(value);

        // Mengirim kata kunci ke Laravel tanpa mereload seluruh halaman
        router.get('/posts', { search: value }, {
            preserveState: true,
            replace: true,
        });
    };

    return (
        <>
            <Head title="Posts" />
            <Toaster position="top-right" richColors />

            <div className="flex flex-col gap-4 p-4">
                
                {/* --- AREA ATAS: SEARCH BAR & TOMBOL TAMBAH --- */}
                <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm border">
                    <div className="w-1/3">
                        <input
                            type="text"
                            placeholder="Cari penerima, NIK, atau status..."
                            value={searchQuery}
                            onChange={handleSearch}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                        />
                    </div>
                    <button onClick={() => openModal()} className="bg-green-600 text-white rounded px-4 py-2 text-sm hover:bg-green-700 font-semibold shadow-sm">
                        TAMBAH DATA
                    </button>
                </div>

                {/* --- AREA TENGAH: TABEL DATA --- */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden border">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-100 border-b">
                                <th className="p-3 font-semibold text-gray-700">Recepient Validation</th>
                                <th className="p-3 font-semibold text-gray-700">NIK</th>
                                <th className="p-3 font-semibold text-gray-700">Status</th>
                                <th className="p-3 font-semibold text-gray-700 w-32">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataPosts.length > 0 ? (
                                dataPosts.map((post: any) => (
                                    <tr key={post.id} className="border-b hover:bg-gray-50">
                                        <td className="p-3">{post.recepient_validation}</td>
                                        <td className="p-3">{post.nik}</td>
                                        <td className="p-3">
                                            <span className={`px-2 py-1 rounded text-xs font-semibold ${
                                                post.status === 'Validated' ? 'bg-green-100 text-green-700' : 
                                                post.status === 'Rejected' ? 'bg-red-100 text-red-700' : 
                                                'bg-yellow-100 text-yellow-700'
                                            }`}>
                                                {post.status}
                                            </span>
                                        </td>
                                        <td className="p-3 flex gap-2">
                                            <button onClick={() => openModal(post)} className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600">Edit</button>
                                            <button onClick={() => handleDelete(post.id)} className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600">Delete</button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={4} className="text-center p-6 text-gray-500">Tidak ada data ditemukan.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* --- AREA BAWAH: PAGINATION --- */}
                {posts.links && posts.links.length > 3 && (
                    <div className="flex justify-end mt-4">
                        <div className="flex flex-wrap gap-1">
                            {posts.links.map((link: any, index: number) => (
                                link.url ? (
                                    <Link
                                        key={index}
                                        href={link.url}
                                        className={`px-3 py-1 border rounded text-sm ${
                                            link.active ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 hover:bg-gray-50'
                                        }`}
                                        dangerouslySetInnerHTML={{ __html: link.label }}
                                    />
                                ) : (
                                    <span
                                        key={index}
                                        className="px-3 py-1 border rounded text-sm bg-gray-100 text-gray-400 cursor-not-allowed"
                                        dangerouslySetInnerHTML={{ __html: link.label }}
                                    />
                                )
                            ))}
                        </div>
                    </div>
                )}

            </div>

            <PostFormModal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} post={selectedPost} />
        </>
    );
}

index.layout = {
    breadcrumbs: [
        {
            title: 'Posts',
            href: '/posts',
        },
    ],
};