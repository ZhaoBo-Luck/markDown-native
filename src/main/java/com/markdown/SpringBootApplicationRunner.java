package com.markdown;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@SpringBootApplication
@EnableCaching //注解代表使用redis缓存
public class SpringBootApplicationRunner {

    public static void main(String[] args) {
        SpringApplication.run(SpringBootApplicationRunner.class);

       /* SpringApplication sApp = new SpringApplication(SpringBootApplicationRunner.class);
        sApp.setBannerMode(Banner.Mode.LOG);
        sApp.run();*/
    }

}
