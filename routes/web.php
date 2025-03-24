<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\RegisterController;

Route::get('/', [HomeController::class, 'view']);
Route::get('/login', [LoginController::class, 'view']);
Route::get('/register', [RegisterController::class, 'view']);

Route::redirect('/here', '/there');