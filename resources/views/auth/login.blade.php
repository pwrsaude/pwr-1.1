@extends('auth._partials.login.head_login')
    <!-- Content -->

    <div class="authentication-wrapper authentication-cover">
        <div class="authentication-inner row m-0">

            <!-- Login -->
            <div class="d-flex col-12 col-lg-5 col-xl-5 align-items-center authentication-bg p-sm-5 p-4" style="border-radius: 10px 40px 40px 10px;">
                <div class="w-px-400 mx-auto">
                    <!-- Logo -->
                    <div class="app-brand mb-5">
                        <a href="index.html" class="app-brand-link gap-2">
                            <img src="../../assets/img/logo_pwrsaude.png" style="width: 200px;" alt="">
                        </a>
                    </div>
                    <!-- /Logo -->
                    <h4 class="mb-2">Login</h4>

                    <form id="formAuthentication" class="mb-3" action="/painel/home" method="POST">
                        @csrf
                        <div class="mb-3">
                            <label for="email" class="form-label">Email ou CPF</label>
                            <input
                            type="text"
                            class="form-control"
                            id="email"
                            name="email-username"
                            placeholder="Digite seu e-mail ou CPF"
                            autofocus
                            />
                        </div>
                        <div class="mb-3 form-password-toggle">
                            <div class="d-flex justify-content-between">
                                <label class="form-label" for="password">Senha</label>
                                <a href="auth-forgot-password-cover.html">
                                    <small>Esqueceu Sua Senha?</small>
                                </a>
                            </div>
                            <div class="input-group input-group-merge">
                                <input
                                type="password"
                                id="password"
                                class="form-control"
                                name="password"
                                placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                                aria-describedby="password"
                                />
                                <span class="input-group-text cursor-pointer"><i class="bx bx-hide"></i></span>
                            </div>
                        </div>
                        <div class="mb-3">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="remember-me" />
                                <label class="form-check-label" for="remember-me"> Lembrar me </label>
                            </div>
                        </div>
                        <button class="btn btn-primary d-grid w-100">Entrar</button>
                    </form>

                    <div class="divider my-4">
                        <div class="divider-text">ou</div>
                    </div>
                    <p class="text-center">
                        <span>Não é cliente ?</span>
                        <a href="{{ route('page.registrar') }}">
                            <span>Crie uma conta</span>
                        </a>
                    </p>
                </div>
            </div>
            <!-- /Login -->
            <!-- /Left Text -->
            <div class="d-none d-lg-flex col-lg-7 col-xl-7 align-items-center p-5">
                <div class="w-100 d-flex justify-content-center">
                    <img src="../../assets/img/illustrations/boy-with-rocket-light.png" class="img-fluid" alt="Login image" width="700" data-app-dark-img="illustrations/boy-with-rocket-dark.png" data-app-light-img="illustrations/boy-with-rocket-light.png" />
                </div>
            </div>
            <!-- /Left Text -->
        </div>
    </div>

    <!-- / Content -->

@extends('auth._partials.login.footer_login')
