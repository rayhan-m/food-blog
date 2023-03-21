<?php

namespace App\Http\Middleware;

use App\Providers\RouteServiceProvider;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RedirectIfAuthenticated
{

    public function handle(Request $request, Closure $next, ...$guard)
    {

        if (Auth::guard($guard)->check() && Auth::user()->role_id==1) {
            return redirect()->route('dashboard');
        }elseif (Auth::guard($guard)->check() && Auth::user()->role_id == 2) {
            return redirect('/');
        }else{
            return $next($request);
        }
    }
}
