#include <iostream>

bool prime[100000];
void isprime()
{
    for(int i=2;i*i<=1000000;++i)
    {
        if(prime[p]==true)
        {
            for(int j=i*i;j<=n;j+=i)
            {
                prime[j]=false;
            }
        }
    }
}
int main() {
    int n;
    cin>>n;
    memset(prime,false,sizeof(prime));
    int ans=0;
    for(int i=2;i<=n;++i)
    {
        if(prime[i]==true)
        {
            ans+=i;
        }
    }
    cout<<ans<<endl;
    return 0;
}
