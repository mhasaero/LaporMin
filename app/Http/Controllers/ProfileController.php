<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Barang;
use App\Models\Peminjaman;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('Profile/Edit', [
            'user' => $request->user(), 
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * miranti ngetes biar tampil 
     */
    public function ubahpassword(Request $request): Response
    {
        return Inertia::render('Profile/Partials/UpdatePasswordForm', [
        ]);
    }

    public function pinjamanSaya(Request $request): Response
    {
        $userNim = Auth::user()->nim;

        $peminjaman = Peminjaman::with('barang') // jika ada relasi ke barang
            ->whereHas('user', function ($query) use ($userNim) {
                $query->where('nim', $userNim);
            })
            ->get();

        return Inertia::render('Profile/RiwayatPinjaman', [
            'barang' => $peminjaman
        ]);
    }
    

    /**
     * Update the user's profile information.
     */
    // public function update(ProfileUpdateRequest $request): RedirectResponse
    // {
    //     $request->user()->fill($request->validated());

    //     if ($request->user()->isDirty('email')) {
    //         $request->user()->email_verified_at = null;
    //     }

    //     $request->user()->save();

    //     return Redirect::route('profile.edit');
    // }

    public function update(Request $request)
    {
        $request->validate([
            'no_telp' => ['required', 'numeric', 'min:10'],
        ]);

        $request->user()->update([
            'no_telp' => $request->input('no_telp'),
        ]);

        return Inertia::render('Profile/Edit', [
            'status' => 'No telp berhasil diedit!', 
            'user' => $request->user(),
        ]);
    }
      

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
