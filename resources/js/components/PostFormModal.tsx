import { useState, useEffect } from "react";
import { router } from "@inertiajs/react";
import { Toaster, toast} from "sonner";

//buat interface
interface Post {
    id?: number;
    recepient_validation: string;
    nik: string;
    status: string;
}

interface Props {
    isOpen: boolean;
    closeModal: () => void;
    post?: Post | null;
}

export default function PostFormModal({ isOpen, closeModal, post }: Props) {
    const [ formData, setFormData] = useState<any> ({
        recepient_validation: "", 
        nik: "", 
        status: ""
    });

//code efect modal
useEffect(() => {
    if (post) {
        setFormData({
            recepient_validation: post.recepient_validation,
            nik: post.nik,
            status: post.status
        });
    } else {
        // Reset form jika modal untuk tambah data baru
        setFormData({ 
            recepient_validation: "", 
            nik: "", 
            status: "" });
    }
}, [post]);

//setting untuk element textarea
const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

//handle input form
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();

    //ambil data inputan
    const data = new FormData();
    data.append("recepient_validation", formData.recepient_validation);
    data.append("nik", formData.nik);
    data.append("status", formData.status);

    const pesanSukses = post?.id ? "Data Sukses Di Update" : "Data Sukses Di Simpan";
    const pesanGagal = post?.id ? "Data Gagal Di Update" : "Data Gagal Di Simpan";

    //gunakan method PUT untuk kirim data (KONDISI)
    if (post?.id) {
      data.append("_method", "PUT");
    router.post(`/posts/${post.id}`, data, {
        onSuccess: ()=> {
            toast.success(pesanSukses);
            closeModal();
            router.reload();
        },
        onError: (errors) =>{
            toast.error(pesanGagal);
            console.error(errors.message || "gagal kirim data");
        },
      });
    }else{
      router.post("/posts",data, {
          onSuccess: () => {
            toast.success(pesanSukses);
            closeModal();
            router.reload();
          },
          onError: (errors) => {
            toast.error(pesanGagal);
            console.error(errors.message || "gagal kirim data");
          } 
      });
    }
};


if (!isOpen) return null;

return (
     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl">
        <h2 className="text-lg font-semibold mb-4">{post ? "Edit Post" : "Add Post"}</h2>
        <form onSubmit={handleSubmit}encType="multipart/form-data">
          
          <div className="mb-3">
            <label className="block text-sm font-medium">Nama Penerima</label>
            <input
              type="text"
              name="recepient_validation"
              value={formData.recepient_validation || ''}
              onChange={handleChange}
              className="w-full border rounded p-2"
              required
            />
          </div>
          <div className="mb-3">
            <label className="block text-sm font-medium">NIK</label>
            <input
              name="nik"
              value={formData.nik || ''}
              onChange={handleChange}
              className="w-full border rounded p-2"
              required
              maxLength={16}
            ></input>
          </div>
            <div className="mb-3">
            <label className="block text-sm font-medium">Status Validasi</label>
              <select
                  name="status"
                  value={formData.status || ''} // Gunakan nama kolom yang sesuai
                  onChange={handleChange}
                  className="w-full border rounded p-2"
                  required
              >
                  <option value="">Pilih Status</option>
                  <option value="Validated">Validated</option>
                  <option value="Pending">Pending</option>
                  <option value="Rejected">Rejected</option>
              </select>
            </div>
          <div className="flex justify-end gap-2">
            <button type="button" onClick={closeModal} className="px-4 py-2 bg-gray-500 text-white rounded">Batal</button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">{post ? "Ubah" : "Input"}</button>
          </div>
        </form>
      </div>
    </div>
);

}