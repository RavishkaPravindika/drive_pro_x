<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class DebugAuth
{
    public function handle(Request $request, Closure $next)
    {
        Log::info('Auth Middleware: User authenticated', ['user' => Auth::check() ? Auth::user()->toArray() : 'Guest']);
        if (!Auth::check()) {
            return redirect()->route('login');
        }
        return $next($request);
    }
}